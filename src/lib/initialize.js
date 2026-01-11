// import internal modules
import { OPEN_API_CONFIG } from '../utils/constants.js';
import { getSchemaFilePath, readSchemaFile } from '../utils/helpers.js';

// import external modules
import fs from 'fs/promises';
import util from 'util';

// sub-function to generate config file contents
function generateConfigFileContents({ schemaFileContents, typeDefVersion }) {
  return `/**
 * @type {import('@docs-gen/openapi').${typeDefVersion}}
 */

export default ${util.inspect(JSON.parse(schemaFileContents), {
    compact: false,
    depth: null,
    maxArrayLength: null,
    maxStringLength: null,
    sorted: false,
  })};`;
}

// function to initialize a config file
export async function initialize({ openAPIVersion, configFilePath }) {
  // get schema file path
  const schemaFilePath = getSchemaFilePath({
    dirName: OPEN_API_CONFIG.SCHEMA_FILES_MAP.TEMPLATES_DIR,
    fileName: OPEN_API_CONFIG.SCHEMA_FILES_MAP[openAPIVersion],
  });

  // get schema file contents
  const schemaFileContents = await readSchemaFile({ schemaFilePath });

  // generate config file contents
  const configFileContents = generateConfigFileContents({
    schemaFileContents,
    typeDefVersion: OPEN_API_CONFIG.TYPE_DEFS_MAP[openAPIVersion],
  });

  // write config file
  return await fs.writeFile(configFilePath, configFileContents, 'utf-8');
}
