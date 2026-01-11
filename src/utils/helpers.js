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

// function to resolve and get schema file path
export function getSchemaFilePath({ dirName, fileName }) {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const schemaDir = path.join(__dirname, `./schemas/${dirName}`);
  return path.resolve(schemaDir, fileName);
}

// function to read schema file contents
export async function readSchemaFile({ schemaFilePath }) {
  return await fs.readFile(schemaFilePath, 'utf-8');
}
