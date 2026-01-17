### OpenAPI 3.0.x config example
```js
export default {
  _internalConfig: {
    openapi: '3.0.0',
  },
  openAPIConfig: {
    info: {
      title: 'Testing Title',
      version: '1.0.0',
      description: 'A sample description',
      termsOfService: 'https://example.com/terms',
      contact: {
        name: 'John Doe',
        url: 'https://example.com/contact',
        email: 'johndoe@example.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    securitySchemes: {},
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
    servers: [
      {
        url: 'https://api.example.com/v1',
        description: 'The main production server',
        variables: {
          env: {
            default: 'prod',
            description: 'Environment variable',
            enum: ['dev', 'staging', 'prod'],
          },
        },
      },
    ],
    externalDocs: {
      description: 'Find more info here',
      url: 'https://example.com/docs',
    },
    tags: [
      {
        name: 'user',
        description: 'Operations about user',
        externalDocs: {
          description: 'Find more info here',
          url: 'https://example.com/docs/user',
        },
      },
    ],
  },
  generatorConfig: {
    baseDir: 'src',
    filePatterns: ['**/*.docs.{js,ts}'],
    outputDir: 'docs',
    outputFileName: 'api_docs.json',
  },
};
```

### OpenAPI 3.1.x config example
```js
export default {
  _internalConfig: {
    openapi: '3.1.0',
    jsonSchemaDialect: 'https://json-schema.org/draft/2020-12/schema',
  },
  openAPIConfig: {
    info: {
      title: 'Testing Title',
      version: '1.0.0',
      description: 'A sample description',
      termsOfService: 'https://example.com/terms',
      summary: 'A brief summary of the API',
      contact: {
        name: 'John Doe',
        url: 'https://example.com/contact',
        email: 'johndoe@example.com',
      },
      license: {
        name: 'MIT',
        identifier: 'MIT',
      },
    },
    securitySchemes: {},
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
    servers: [
      {
        url: 'https://api.example.com/v1',
        description: 'The main production server',
        variables: {
          env: {
            default: 'prod',
            description: 'Environment variable',
            enum: ['dev', 'staging', 'prod'],
          },
        },
      },
    ],
    externalDocs: {
      description: 'Find more info here',
      url: 'https://example.com/docs',
    },
    tags: [
      {
        name: 'user',
        description: 'Operations about user',
        externalDocs: {
          description: 'Find more info here',
          url: 'https://example.com/docs/user',
        },
      },
    ],
  },
  generatorConfig: {
    baseDir: 'src',
    filePatterns: ['**/*.docs.{js,ts}'],
    outputDir: 'docs',
    outputFileName: 'api_docs.json',
  },
};
```

### OpenAPI 3.2.x config example
```js
export default {
  _internalConfig: {
    openapi: '3.2.0',
    jsonSchemaDialect: 'https://json-schema.org/draft/2020-12/schema',
  },
  openAPIConfig: {
    info: {
      title: 'Testing Title',
      version: '1.0.0',
      description: 'A sample description',
      termsOfService: 'https://example.com/terms',
      summary: 'A brief summary of the API',
      contact: {
        name: 'John Doe',
        url: 'https://example.com/contact',
        email: 'johndoe@example.com',
      },
      license: {
        name: 'MIT',
        identifier: 'MIT',
      },
    },
    securitySchemes: {},
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
    servers: [
      {
        url: 'https://api.example.com/v1',
        name: 'Production Server',
        description: 'The main production server',
        variables: {
          env: {
            default: 'prod',
            description: 'Environment variable',
            enum: ['dev', 'staging', 'prod'],
          },
        },
      },
    ],
    externalDocs: {
      description: 'Find more info here',
      url: 'https://example.com/docs',
    },
    tags: [
      {
        name: 'user',
        description: 'Operations about user',
        summary: 'User related operations',
        externalDocs: {
          description: 'Find more info here',
          url: 'https://example.com/docs/user',
        },
      },
    ],
  },
  generatorConfig: {
    baseDir: 'src',
    filePatterns: ['**/*.docs.{js,ts}'],
    outputDir: 'docs',
    outputFileName: 'api_docs.json',
  },
};
```