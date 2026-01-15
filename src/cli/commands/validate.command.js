// import local modules
import { OPEN_API_CONFIG } from '../../utils/constants.js';
import { validate } from '../../lib/validate.js';

// import external modules
import path from 'path';
import kleur from 'kleur';

// function to invoke the validation of config file via CLI
export async function validateConfigByCLI() {
  try {
    const configFilePath = path.join(process.cwd(), OPEN_API_CONFIG.FILE_NAME);

    // invoke validation
    await validate({ configFilePath });
  } catch (error) {
    console.error(
      `${kleur.red('✖')} ${kleur.bold().blue('@docs-gen/openapi:')} ${kleur
        .bold()
        .grey('Error during docs-gen.config.js file validation:')} ${kleur.red(error.message)}`
    );
  }
}
