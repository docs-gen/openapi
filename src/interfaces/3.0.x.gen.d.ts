import {
  ContactObject,
  ApiKeySecuritySchemeObject,
  HttpSecuritySchemeObject,
  OAuth2SecuritySchemeObject,
  OpenIDConnectSecuritySchemeObject,
  SecurityRequirementObject,
  ServerObject,
  TagObject,
  ExternalDocsObject,
  generatorConfigObject,
} from './common.gen';

// License Interface
interface LicenseObject {
  name: string;
  url?: string;
}

// Info Interface
interface InfoObject {
  title: string;
  version: string;
  description?: string;
  termsOfService?: string;
  contact?: ContactObject;
  license?: LicenseObject;
}

export interface DocsGeneratorOptions {
  readonly _internalConfig: {
    readonly openapi: '3.0.0';
    readonly $schema: './schemas/3.0.x.gen.schema.json';
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
