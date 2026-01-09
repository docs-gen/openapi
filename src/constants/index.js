export const OPEN_API_CONFIG = {
  FILE_NAME: 'docs-gen.config.js',
  SUPPORTED_OPEN_API_VERSIONS: [
    {
      name: 'OpenAPI 3.0.x',
      value: '3.0.x',
    },
    {
      name: 'OpenAPI 3.1.x',
      value: '3.1.x',
    },
    {
      name: 'OpenAPI 3.2.x',
      value: '3.2.x',
    },
  ],
  SCHEMA_FILES_MAP: {
    '3.0.x': '3.0.x.gen.schema.json',
    '3.1.x': '3.1.x.gen.schema.json',
    '3.2.x': '3.2.x.gen.schema.json',
  },
  TYPE_DEFS_MAP: {
    '3.0.x': 'DocsGeneratorOptionsV30X',
    '3.1.x': 'DocsGeneratorOptionsV31X',
    '3.2.x': 'DocsGeneratorOptionsV32X',
  },
};
