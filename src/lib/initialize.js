// import internal modules
import { OPEN_API_CONFIG } from '../utils/constants.js';
import { readSchemaFile } from '../utils/helpers.js';

// import external modules
import fs from 'fs/promises';
import util from 'util';

// sub-function to generate config file content based on OpenAPI version
function generateFileContent({ schemaFileContent, openAPIVersion }) {
  const versionTypeDefs = OPEN_API_CONFIG.TYPE_DEFS_MAP[openAPIVersion];

  return `/**
 * @type {import('@docs-gen/openapi').${versionTypeDefs}}
 */

export default ${util.inspect(JSON.parse(schemaFileContent), {
    compact: false,
    depth: null,
    maxArrayLength: null,
    maxStringLength: null,
    sorted: false,
  })};`;
}

// function to initialize a config file
export async function initialize({ openAPIVersion, configFilePath }) {
  // get schema file content
  const schemaFileContent = await readSchemaFile({
    dirName: OPEN_API_CONFIG.SCHEMA_FILES_MAP.TEMPLATES_DIR,
    openAPIVersion,
  });

  // generate config file content
  const configFileContent = generateFileContent({ schemaFileContent, openAPIVersion });

  // write config file
  return await fs.writeFile(configFilePath, configFileContent, 'utf-8');
}
