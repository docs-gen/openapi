export const OPEN_API_CONFIG = {
  FILE_NAME: 'docs-gen.config.js',
  SUPPORTED_OPEN_API_VERSIONS: [
    {
      name: 'OpenAPI 3.0.x',
      value: '3.0.0',
      description: 'Stable and widely supported, uses OpenAPI Schema instead of full JSON Schema',
    },
    {
      name: 'OpenAPI 3.1.x',
      value: '3.1.0',
      description: 'Uses full JSON Schema 2020-12, better compatibility with JSON Schema tools',
    },
    {
      name: 'OpenAPI 3.2.x',
      value: '3.2.0',
      description: 'Latest iteration, includes minor improvements and clarifications over 3.1.x',
    },
  ],
  SCHEMA_FILES_MAP: {
    TEMPLATES_DIR: 'templates',
    CONFIG_DIR: 'config',
    OPENAPI_DIR: 'openapi',
    COMMON_DIR: 'common',
    '3.0.0': '3.0.0.gen.schema.json',
    '3.1.0': '3.1.0.gen.schema.json',
    '3.2.0': '3.2.0.gen.schema.json',
    common_config: 'config.gen.schema.json',
  },
  TYPE_DEFS_MAP: {
    '3.0.0': 'DocsGeneratorOptionsV30X',
    '3.1.0': 'DocsGeneratorOptionsV31X',
    '3.2.0': 'DocsGeneratorOptionsV32X',
  },
  SERVER_VARIABLE_REFRENCES_REGEX: /\{([^}]+)\}/g,
};
