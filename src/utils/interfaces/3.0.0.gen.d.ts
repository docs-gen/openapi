import {
  InfoBase,
  LicenseWithUrl,
  ApiKeySecuritySchemeObject,
  HttpSecuritySchemeObject,
  OAuth2SecuritySchemeObject,
  OpenIDConnectSecuritySchemeObject,
  SecurityRequirementObject,
  ServerBase,
  TagBase,
  ExternalDocsObject,
  generatorConfigObject,
} from './common.gen';

interface InfoObject extends InfoBase {
  license?: LicenseWithUrl;
}

interface ServerObject extends ServerBase {}
interface TagObject extends TagBase {}

export interface DocsGeneratorOptions {
  readonly _internalConfig: {
    readonly openapi: '3.0.0';
  };

  openAPIConfig: {
    info: InfoObject;
    securitySchemes?: Record<
      string,
      | ApiKeySecuritySchemeObject
      | HttpSecuritySchemeObject
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
