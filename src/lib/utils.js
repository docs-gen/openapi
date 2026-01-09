// import external modules
import fs from 'fs/promises';

// function to check if a config file already exists
export async function configFileExists(filePath) {
  return await fs
    .stat(filePath)
    .then(() => true)
    .catch(() => false);
}
