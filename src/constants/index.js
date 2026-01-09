export const OPEN_API_CONFIG = {
  FILE_NAME: 'docs-gen.config.js',
  SUPPORTED_OPEN_API_VERSIONS: [
    {
      name: 'OpenAPI 3.0.x',
      value: '3.0.0',
    },
    {
      name: 'OpenAPI 3.1.x',
      value: '3.1.0',
    },
    {
      name: 'OpenAPI 3.2.x',
      value: '3.2.0',
    },
  ],
  SCHEMA_FILES_MAP: {
    '3.0.0': '3.0.0.gen.schema.json',
    '3.1.0': '3.1.0.gen.schema.json',
    '3.2.0': '3.2.0.gen.schema.json',
  },
  TYPE_DEFS_MAP: {
    '3.0.0': 'DocsGeneratorOptionsV30X',
    '3.1.0': 'DocsGeneratorOptionsV31X',
    '3.2.0': 'DocsGeneratorOptionsV32X',
  },
};
