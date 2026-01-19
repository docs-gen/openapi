// import local modules
import { OPEN_API_CONFIG } from './constants.js';

// import external modules
import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';
import util from 'util';
import kleur from 'kleur';
import { confirm, select } from '@inquirer/prompts';

// function to check if a config file already exists
export async function configFileExists(filePath) {
  return await fs
    .stat(filePath)
    .then(() => true)
    .catch(() => false);
}

// function to confirm overwriting an existing config file
export async function confirmOverwrite() {
  return await confirm({
    message: `${kleur.blue('@docs-gen/openapi:')} ${kleur.grey(
      `${OPEN_API_CONFIG.FILE_NAME} already exists, do you want to overwrite it?`
    )}`,
    default: false,
  });
}

// function to select OpenAPI version
export async function selectVersion() {
  return await select({
    message: `${kleur.blue('@docs-gen/openapi:')} ${kleur.grey(
      'Select the OpenAPI version for your configuration file:'
    )}`,
    choices: OPEN_API_CONFIG.SUPPORTED_OPEN_API_VERSIONS,
  });
}

// function to resolve and get schema file path
export function getSchemaFilePath({ dirName, fileName }) {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const schemaDir = path.join(__dirname, `./schemas/${dirName}`);
  return path.resolve(schemaDir, fileName);
}

// function to get schema file contents
export async function getSchemaFileContents({ schemaFilePath }) {
  return await fs.readFile(schemaFilePath, 'utf-8');
}

// function to generate config file contents
export function generateConfigFileContents({ schemaFileContents, typeDefVersion }) {
  return `/**
 * @type {import('@docs-gen/openapi').${typeDefVersion}}
 *
 * ⚠ IntelliSense Notice
 *
 * Type suggestions, auto-completion, and hover information require IntelliSense,
 * which only works if the package is installed locally:
 *
 * Run the following command in your project root:
 *
 * ┌──────────────────────────────────────────────────────────────┐
 * │                                                              │
 * │               npm install -D @docs-gen/openapi               │
 * │                                                              │
 * └──────────────────────────────────────────────────────────────┘
 *
 * If you are using this tool via npx, the configuration will still work,
 * but your editor won't be able to provide IntelliSense.
 */

export default ${util.inspect(JSON.parse(schemaFileContents), {
    compact: false,
    depth: null,
    maxArrayLength: null,
    maxStringLength: null,
    sorted: false,
  })};`;
}

// function to load config
export async function loadConfig(configFilePath) {
  const configModule = await import(url.pathToFileURL(configFilePath).href);
  return configModule.default;
}

// function to validate module against its schema
export async function validateSchema({ validationModule, moduleSchema, additionalSchemas }) {
  // create new ajv instance and add plugins
  const ajvInstance = new Ajv({ allErrors: true, strict: true });
  addFormats(ajvInstance);
  ajvErrors(ajvInstance);

  // add additionalSchemas to ajv instance (if any)
  if (additionalSchemas && additionalSchemas.length > 0)
    additionalSchemas.forEach(additionalSchema => ajvInstance.addSchema(additionalSchema));

  // compile moduleSchema
  const compiledModuleSchema = ajvInstance.compile(moduleSchema);

  // validate module against compiledModuleSchema
  const validationResult = compiledModuleSchema(validationModule);

  // return validation result and errors (if any)
  return { validationResult, validationErrors: compiledModuleSchema.errors };
}

// function to post validate tags
export function postValidateTags({ tags, postValidationErrors }) {
  // check if tag names are unique
  const tagNames = tags.map(tag => tag.name);
  const uniqueTagNames = new Set(tagNames);
  if (tagNames.length !== uniqueTagNames.size)
    postValidationErrors.push('openAPIConfig.tags contain multiple tags with the same name');
}

// function to post validate servers
export function postValidateServers({ servers, postValidationErrors }) {
  // check if server urls are unique
  const serverUrls = servers.map(server => server.url);
  const uniqueServerUrls = new Set(serverUrls);
  if (serverUrls.length !== uniqueServerUrls.size)
    postValidationErrors.push('openAPIConfig.servers contain multiple servers with the same url');

  // validate each server
  servers.forEach(server => {
    const variablesRefsInURL = [
      ...server.url.matchAll(OPEN_API_CONFIG.SERVER_VARIABLE_REFRENCES_REGEX),
    ].map(match => match[1]);
    const serverVariables = Object.keys(server.variables || {});

    // if variable refrences and server.variables mismatch
    if (
      variablesRefsInURL.length !== serverVariables.length ||
      !variablesRefsInURL.every(varName => serverVariables.includes(varName))
    )
      postValidationErrors.push(
        [
          `url-variable-references and server.variables mismatch`,
          `  • server-url: ${server.url}`,
          `  • url-variable-references: [${variablesRefsInURL.join(', ')}]`,
          `  • server-variables: [${serverVariables.join(', ')}]`,
        ].join('\n')
      );

    // check if server variables default exist in enum
    Object.entries(server.variables || {}).forEach(([name, variable]) => {
      if (variable.enum && !variable.enum.includes(variable.default))
        postValidationErrors.push(
          [
            `variable.default doesn't exist in it's enum`,
            `  • server-url: ${server.url}`,
            `  • variable-name: ${name}`,
            `  • default-value: ${variable.default}`,
            `  • enum-values: [${variable.enum.join(', ')}]`,
          ].join('\n')
        );
    });
  });
}

// function to post validate security requirements and schemes
export function postValidateSecurityRequirementsAndSchemes({
  securityRequirements,
  securitySchemes,
  postValidationErrors,
}) {
  // check if security schemes are defined when security requirements exist
  if (
    securityRequirements.length > 0 &&
    (!securitySchemes || Object.keys(securitySchemes).length === 0)
  ) {
    postValidationErrors.push(
      'openAPIConfig.securitySchemes must be defined when openAPIConfig.security exists'
    );
    return;
  }

  // check if security-schemes doesn't exist in securitySchemes
  if (securityRequirements && securitySchemes) {
    securityRequirements.forEach(securityRequirement => {
      Object.keys(securityRequirement).forEach(schemeName => {
        if (!(schemeName in securitySchemes))
          postValidationErrors.push(
            [
              `schemeName in security and securitySchemes mismatch`,
              `  • schemeName-used: ${schemeName}`,
              `  • schemesNames-allowed: [${Object.keys(securitySchemes).join(', ')}]`,
            ].join('\n')
          );
      });
    });
  }

  // map to store oauth scopes per security scheme
  const OAuth2ScopeMap = new Map();

  // collect all oauth scopes defined in securitySchemes
  Object.entries(securitySchemes).forEach(([schemeName, securityScheme]) => {
    if (securityScheme.type === 'oauth2') {
      // set to store unique scopes
      const scopeSet = new Set();

      // collect scopes from all flows
      Object.values(securityScheme.flows).forEach(flow => {
        Object.keys(flow.scopes).forEach(scope => scopeSet.add(scope));
      });

      // add to OAuth2ScopeMap
      OAuth2ScopeMap.set(schemeName, scopeSet);
    }
  });

  // validate each security requirement
  Object.entries(securityRequirements).forEach(([_index, securityRequirement]) => {
    // if security scheme is not of type oauth2, scopes must be empty
    Object.entries(securityRequirement).forEach(([schemeName, scopes]) => {
      if (!OAuth2ScopeMap.has(schemeName) && scopes.length > 0)
        postValidationErrors.push(
          [
            `non-oauth2 security scheme scopes must be empty`,
            `  • schemeName: ${schemeName}`,
            `  • scopes-allowed: []`,
            `  • scopes-provided: [${scopes.join(', ')}]`,
          ].join('\n')
        );

      // if security scheme is of type oauth2, scopes must be non-empty and valid
      if (OAuth2ScopeMap.has(schemeName)) {
        // get allowed scopes for this scheme
        const allowedScopes = OAuth2ScopeMap.get(schemeName);

        // if scopes is empty
        if (scopes.length === 0) {
          postValidationErrors.push(
            [
              `empty scopes provided for oauth2 security scheme`,
              `  • schemeName: ${schemeName}`,
              `  • scopes-provided: []`,
              `  • scopes-allowed: [${[...allowedScopes].join(', ')}]`,
            ].join('\n')
          );
        } else {
          // check if provided scopes are not valid
          scopes.forEach(scope => {
            if (!allowedScopes.has(scope))
              postValidationErrors.push(
                [
                  `invalid scopes provided for oauth2 security scheme`,
                  `  • schemeName: ${schemeName}`,
                  `  • scope-provided: [${scope}]`,
                  `  • scopes-allowed: [${[...allowedScopes].join(', ')}]`,
                ].join('\n')
              );
          });
        }
      }
    });
  });
}
