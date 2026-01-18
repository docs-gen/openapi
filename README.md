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
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'X-API-KEY',
        description: 'API Key needed to access the endpoints',
      },
      HttpAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'HTTP Bearer authentication with JWT tokens',
      },
      OAuth2Auth: {
        type: 'oauth2',
        flows: {
          implicit: {
            authorizationUrl: 'https://example.com/oauth/authorize',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
          password: {
            tokenUrl: 'https://example.com/oauth/token',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
          clientCredentials: {
            tokenUrl: 'https://example.com/oauth/token',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
          authorizationCode: {
            authorizationUrl: 'https://example.com/oauth/authorize',
            tokenUrl: 'https://example.com/oauth/token',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
        },
        description: 'OAuth2 authentication',
      },
      OpenIdConnectAuth: {
        type: 'openIdConnect',
        openIdConnectUrl: 'https://example.com/.well-known/openid-configuration',
        description: 'OpenID Connect authentication',
      },
    },
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
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'X-API-KEY',
        description: 'API Key needed to access the endpoints',
      },
      HttpAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'HTTP Bearer authentication with JWT tokens',
      },
      MutualTLSAuth: {
        type: 'mutualTLS',
        description: 'Mutual TLS authentication',
      },
      OAuth2Auth: {
        type: 'oauth2',
        flows: {
          implicit: {
            authorizationUrl: 'https://example.com/oauth/authorize',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
          password: {
            tokenUrl: 'https://example.com/oauth/token',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
          clientCredentials: {
            tokenUrl: 'https://example.com/oauth/token',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
          authorizationCode: {
            authorizationUrl: 'https://example.com/oauth/authorize',
            tokenUrl: 'https://example.com/oauth/token',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
        },
        description: 'OAuth2 authentication',
      },
      OpenIdConnectAuth: {
        type: 'openIdConnect',
        openIdConnectUrl: 'https://example.com/.well-known/openid-configuration',
        description: 'OpenID Connect authentication',
      },
    },
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
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'X-API-KEY',
        description: 'API Key needed to access the endpoints',
      },
      HttpAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'HTTP Bearer authentication with JWT tokens',
      },
      MutualTLSAuth: {
        type: 'mutualTLS',
        description: 'Mutual TLS authentication',
      },
      OAuth2Auth: {
        type: 'oauth2',
        flows: {
          implicit: {
            authorizationUrl: 'https://example.com/oauth/authorize',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
          password: {
            tokenUrl: 'https://example.com/oauth/token',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
          clientCredentials: {
            tokenUrl: 'https://example.com/oauth/token',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
          authorizationCode: {
            authorizationUrl: 'https://example.com/oauth/authorize',
            tokenUrl: 'https://example.com/oauth/token',
            refreshUrl: 'https://example.com/oauth/refresh',
            scopes: {
              'read:data': 'Read access to data',
              'write:data': 'Write access to data',
            },
          },
        },
        description: 'OAuth2 authentication',
      },
      OpenIdConnectAuth: {
        type: 'openIdConnect',
        openIdConnectUrl: 'https://example.com/.well-known/openid-configuration',
        description: 'OpenID Connect authentication',
      },
    },
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