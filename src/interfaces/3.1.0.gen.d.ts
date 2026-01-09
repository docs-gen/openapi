import {
  InfoObject,
  ApiKeySecuritySchemeObject,
  HttpSecuritySchemeObject,
  MutualTLSSecuritySchemeObject,
  OAuth2SecuritySchemeObject,
  OpenIDConnectSecuritySchemeObject,
  SecurityRequirementObject,
  ServerObject,
  TagObject,
  ExternalDocsObject,
  generatorConfigObject,
} from './common.gen';

export interface DocsGeneratorOptions {
  readonly _internalConfig: {
    readonly openapi: '3.1.0';
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
