import {
  InfoBase,
  LicenseWithUrl,
  LicenseWithIdentifier,
  ApiKeySecuritySchemeObject,
  HttpSecuritySchemeObject,
  MutualTLSSecuritySchemeObject,
  OAuth2SecuritySchemeObject,
  OpenIDConnectSecuritySchemeObject,
  SecurityRequirementObject,
  ServerBase,
  TagBase,
  ExternalDocsObject,
  generatorConfigObject,
} from './common.gen';

interface InfoObject extends InfoBase {
  summary?: string;
  license?: LicenseWithUrl | LicenseWithIdentifier;
}

interface ServerObject extends ServerBase {}
interface TagObject extends TagBase {}

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
