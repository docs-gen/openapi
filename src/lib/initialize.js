// import internal modules
import { OPEN_API_CONFIG } from '../utils/constants.js';
import {
  getSchemaFilePath,
  getSchemaFileContents,
  generateConfigFileContents,
} from '../utils/helpers.js';

// import external modules
import fs from 'fs/promises';

// function to initialize a config file
export async function initialize({ openAPIVersion, configFilePath }) {
  // get openapi version schema file path
  const openAPISchemaFilePath = getSchemaFilePath({
    dirName: OPEN_API_CONFIG.SCHEMA_FILES_MAP.TEMPLATES_DIR,
    fileName: OPEN_API_CONFIG.SCHEMA_FILES_MAP[openAPIVersion],
  });

  // get openapi version schema file contents
  const openAPISchemaFileContents = await getSchemaFileContents({
    schemaFilePath: openAPISchemaFilePath,
  });

  // generate config file contents
  const configFileContents = generateConfigFileContents({
    schemaFileContents: openAPISchemaFileContents,
    typeDefVersion: OPEN_API_CONFIG.TYPE_DEFS_MAP[openAPIVersion],
  });

  // write config file
  return await fs.writeFile(configFilePath, configFileContents, 'utf-8');
}
