import {
  InfoObject,
  ApiKeySecuritySchemeObject,
  HttpSecuritySchemeObject,
  MutualTLSSecuritySchemeObject,
  OAuth2SecuritySchemeObject,
  OpenIDConnectSecuritySchemeObject,
  SecurityRequirementObject,
  ServerVariablesObject,
  ExternalDocsObject,
  generatorConfigObject,
} from './common.gen';

// Server Interface
interface ServerObject {
  url: string;
  description?: string;
  name?: string;
  variables?: Record<string, ServerVariablesObject>;
}

// Tag Type-defs
interface TagObject {
  name: string;
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocsObject;
}

export interface DocsGeneratorOptions {
  readonly _internalConfig: {
    readonly openapi: '3.2.0';
    readonly jsonSchemaDialect: 'https://json-schema.org/draft/2020-12/schema';
  };

  openAPIConfig: {
    info: InfoObject;
    securitySchemes?: Record<
      string,
      | ApiKeySecuritySchemeObject
      | HttpSecuritySchemeObject
      | MutualTLSSecuritySchemeObject
      | OAuth2SecuritySchemeObject
      | OpenIDConnectSecuritySchemeObject
    >;
    security?: SecurityRequirementObject[];
    servers?: ServerObject[];
    tags?: TagObject[];
    externalDocs?: ExternalDocsObject;
  };

  generatorConfig: generatorConfigObject;
}
