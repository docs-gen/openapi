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
    - multiple @security entries are evaluated as OR conditions
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
    - @param LOCATION NAME TYPE [MODIFIERS]
  EXPLANATION:
    - LOCATION: path|query|header|cookie
    - NAME: any non-empty string
    - TYPE: string|integer|boolean|array|number|object
    - MODIFIERS
      - required=true|false (path parameters always required, required=false is invalid)
      - description= any non-empty string
      - itemsType= string|integer|boolean|number|object (only if TYPE is array)
      - other modifiers can be provided, separated by space
  USAGE:
    - @param path userId string required=true description=ID of the user
    - @param query limit integer required=false
    - @param query tags array required=false itemsType=string
    - @param header X-Custom-Header string required=false
    - @param cookie sessionId string required=true description=Session identifier

@requestBody
  RULES:
    - omit this tag if the endpoint does not accept a request body
    - only one logical @requestBody is allowed per endpoint
    - multiple media types are supported by repeating @requestBody
    - allowed for POST, PUT, PATCH, and DELETE methods only
  SYNTAX:
    - @requestBody MEDIA_TYPE SCHEMA [MODIFIERS]
  EXPLANATION:
    - MEDIA_TYPE:
      - application/json
      - application/xml
      - multipart/form-data
      - application/x-www-form-urlencoded
      - text/plain
      - any valid media type string
    - SCHEMA:
      - name of a schema defined in components.schemas
      - must exist in the configFile
    - MODIFIERS:
      - required=true|false (default is false)
      - description=any non-empty string
      - example=any valid value (only one example is allowed per media type)
  USAGE:
    - @requestBody application/json CreatePostInput required=true
    - @requestBody application/json UpdatePostInput
    - @requestBody multipart/form-data UploadFileInput
    - @requestBody application/json CreateUserInput description=User payload

@response
  RULES:
    - at least one @response is required per endpoint
    - multiple @response tags are allowed per endpoint
    - multiple media types for same status code are supported by repeating @response
    - response status codes must be unique per endpoint
    - response bodies are optional
    - responses may reference predefined responses using ref=
    - 204, 304 status codes must not have a response body
  SYNTAX:
    - @response STATUS_CODE [SCHEMA | ref=PREDEFINED_RESPONSE_NAME] [MODIFIERS]
  EXPLANATION:
    - STATUS_CODE:
      - HTTP status code (e.g. 200, 201, 400, 404, 500)
      - or "default"
    - SCHEMA:
      - name of a schema defined in components.schemas
      - must exist in the configFile
      - optional
    - ref=PREDEFINED_RESPONSE_NAME:
      - references a predefined response defined in components.responses
      - must exist in the configFile
      - cannot be used together with SCHEMA
      - optional
    - MODIFIERS:
      - description=any non-empty string
      - example=any valid value (only one example is allowed per media type)
      - mediaType=any valid media type string (default is application/json)
  USAGE:
    - @response 200 PostResponse description=Successful response
    - @response 201 CreatePostResponse example={"id":123,"title":"New Post"}
    - @response 400 ErrorResponse
    - @response default ErrorResponse description=Unexpected error

@externalDocs
  RULES:
    - if present, it applies to the endpoint level
    - omit this tag if no external documentation is needed
    - only one @externalDocs is allowed per endpoint
  SYNTAX:
    - @externalDocs URL [DESCRIPTION]
  EXPLANATION:
    - URL: any valid absolute URL string
    - DESCRIPTION: any non-empty string
  USAGE:
    - @externalDocs https://example.com/docs/endpoint Detailed docs for this endpoint
    - @externalDocs https://example.com/docs/endpoint

@server
  RULES:
    - omit this tag to use the default servers defined in the configFile
    - can be used multiple times per endpoint
    - each server must have a unique URL
    - URL must be a valid absolute URL
    - if variables are used, they must match variables defined in the configFile
  SYNTAX:
    - @server URL [DESCRIPTION]
  EXPLANATION:
    - URL: server URL, may include variables in curly braces
    - DESCRIPTION: any non-empty string
  USAGE:
    - @server https://staging-api.example.com/v1 staging server
    - @server https://dev-api.example.com/{version} Development server

@x-
  RULES:
    - any custom extension starting with 'x-'
    - omit this tag if no custom extensions are needed
    - can be used multiple times per endpoint
  SYNTAX:
    - @x-EXTENSION_NAME EXTENSION_VALUE
  EXPLANATION:
    - EXTENSION_NAME
      - any non-empty string (the full key will be prefixed with 'x-')
    - EXTENSION_VALUE
      - any valid JSON value (string, number, object, array, boolean, null)
  USAGE:
    - @x-rate-limit 1000
    - @x-department engineering
```