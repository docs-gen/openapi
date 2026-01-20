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
      {
        OAuth2Auth: ['read:data', 'write:data'],
      },
    ],
    servers: [
      {
        url: 'https://api.example.com/{version}',
        description: 'The main production server',
        variables: {
          version: {
            default: 'v1',
            description: 'API version',
            enum: ['beta', 'v1', 'v2'],
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
      {
        OAuth2Auth: ['read:data', 'write:data'],
      },
    ],
    servers: [
      {
        url: 'https://api.example.com/{version}',
        description: 'The main production server',
        variables: {
          version: {
            default: 'v1',
            description: 'API version',
            enum: ['beta', 'v1', 'v2'],
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
      {
        OAuth2Auth: ['read:data', 'write:data'],
      },
    ],
    servers: [
      {
        url: 'https://api.example.com/{version}',
        name: 'Production Server',
        description: 'The main production server',
        variables: {
          version: {
            default: 'v1',
            description: 'API version',
            enum: ['beta', 'v1', 'v2'],
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

### Documentation Tags Reference
```md
@route
  SYNTAX:
    - @route HTTP_METHOD PATH_TO_ENDPOINT
  EXPLANATION:
    - HTTP_METHOD: GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|TRACE
    - PATH_TO_ENDPOINT
      - must start with '/' as in '/users'
      - no trailing slash as in '/users/'
      - path parameters must be enclosed in curly braces as in '/u/{uId}/p/{pId}'
      - no query parameters as in '/users?active=true'
  USAGE:
    - @route GET /users
    - @route PATCH /users/{userId}
    - @route POST /users/{userId}/posts
    - @route DELETE /users/{userId}/posts/{postId}

@operationId
  RULES:
    - non-empty string
    - must be unique across all endpoints
    - must not contain spaces
    - case-sensitive
  USAGE:
    - @operationId getUserPosts

@summary
  RULES:
    - any non-empty string
    - omit this tag for no summary
  USAGE:
    - @summary Retrieves a list of posts for a specific user.

@description
  RULES:
    - any non-empty string
    - omit this tag for no description
  USAGE:
    - @description This endpoint retrieves all posts associated with specified user.

@security
  RULES:
    - omit this tag for no security
    - all securitySchemes must exist in the configFile
    - supports multiple schemes per endpoint
    - if scopes are provided, they must exist in the securityScheme definition
  SYNTAX:
    - @security NON_OAUTH_SECURITY_SCHEME_NAME
    - @security OAUTH_SECURITY_SCHEME_NAME OAUTH_SCOPES
  EXPLANATION:
    - SECURITY_SCHEME_NAME: any non-empty string
    - OAUTH_SCOPES: space-separated list of scopes
  USAGE:
    - @security ApiKey
    - @security OAuth2 read:posts write:posts

@tag
  RULES:
    - any non-empty string
    - can be used multiple times per endpoint
    - must exist in the configFile
  USAGE:
    - @tag Tag-1
    - @tag Tag-2

@deprecated
  RULES:
    - if present, marks the endpoint as deprecated
    - omit this tag for not deprecated endpoints
  USAGE:
    - @deprecated

@param
  RULES:
    - omit this tag if there are no parameters
  SYNTAX:
    - @param LOCATION NAME TYPE MODIFIERS
  EXPLANATION:
    - LOCATION: path|query|header|cookie
    - NAME: any non-empty string
    - TYPE: string|integer|boolean|array|number|object
    - MODIFIERS
      - required=true|false (required=false is invalid for path parameters)
      - description= any non-empty string
      - itemsType= string|integer|boolean|number|object (only if TYPE is array)
      - other modifiers can be provided, separated by space
  USAGE:
    - @param path userId string required=true description=ID of the user
    - @param query limit integer required=false
    - @param query tags array required=false itemsType=string
    - @param header X-Custom-Header string required=false
    - @param cookie sessionId string required=true description=Session identifier
```