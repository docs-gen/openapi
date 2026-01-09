// import local modules
import { OPEN_API_CONFIG } from './constants.js';

// import external modules
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

// function to check if a config file already exists
export async function configFileExists(filePath) {
  return await fs
    .stat(filePath)
    .then(() => true)
    .catch(() => false);
}

// function to resolve schema file path and read its content
export async function readSchemaFile({ dirName, openAPIVersion }) {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const schemaDir = path.join(__dirname, `./schemas/${dirName}`);
  const schemaFilePath = path.resolve(
    schemaDir,
    `${OPEN_API_CONFIG.SCHEMA_FILES_MAP[openAPIVersion]}`
  );

  return await fs.readFile(schemaFilePath, 'utf-8');
}
