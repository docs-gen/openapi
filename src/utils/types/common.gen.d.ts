// OAuth Flow Interfaces
interface OAuthImplicitFlow {
  authorizationUrl: string;
  refreshUrl?: string;
  scopes: Record<string, string>;
}

interface OAuthPasswordFlow {
  tokenUrl: string;
  refreshUrl?: string;
  scopes: Record<string, string>;
}

interface OAuthClientCredentialsFlow {
  tokenUrl: string;
  refreshUrl?: string;
  scopes: Record<string, string>;
}

interface OAuthAuthorizationCodeFlow {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl?: string;
  scopes: Record<string, string>;
}

interface OAuthFlowsObject {
  implicit?: OAuthImplicitFlow;
  password?: OAuthPasswordFlow;
  clientCredentials?: OAuthClientCredentialsFlow;
  authorizationCode?: OAuthAuthorizationCodeFlow;
}

// Security Schemes Interfaces
export interface ApiKeySecuritySchemeObject {
  type: 'apiKey';
  description?: string;
  name: string;
  in: 'query' | 'header' | 'cookie';
}

export interface HttpSecuritySchemeObject {
  type: 'http';
  description?: string;
  scheme: string;
  bearerFormat?: string;
}

export interface MutualTLSSecuritySchemeObject {
  type: 'mutualTLS';
  description?: string;
}

export interface OAuth2SecuritySchemeObject {
  type: 'oauth2';
  description?: string;
  flows: OAuthFlowsObject;
}

export interface OpenIDConnectSecuritySchemeObject {
  type: 'openIdConnect';
  description?: string;
  openIdConnectUrl: string;
}

// Metadata Interfaces
interface ContactObject {
  name?: string;
  email?: string;
  url?: string;
}

export interface ExternalDocsObject {
  description?: string;
  url: string;
}
// Base Tag Interface
export interface TagBase {
  name: string;
  description?: string;
  externalDocs?: ExternalDocsObject;
}

// Server Variables Interface
interface ServerVariablesObject {
  enum?: string[];
  default: string;
  description?: string;
}

// Base Server Interface
export interface ServerBase {
  url: string;
  description?: string;
  variables?: Record<string, ServerVariablesObject>;
}

// Security Requirement Interface
export interface SecurityRequirementObject {
  [securitySchemeName: string]: string[];
}

// Base License Interface
interface LicenseBase {
  name: string;
}

// License with URL Interface
export interface LicenseWithUrl extends LicenseBase {
  url: string;
  identifier?: never;
}

// License with Identifier Interface
export interface LicenseWithIdentifier extends LicenseBase {
  identifier: string;
  url?: never;
}

// Base Info Interface
export interface InfoBase {
  title: string;
  version: string;
  description?: string;
  termsOfService?: string;
  contact?: ContactObject;
}

// Docs-Generator-Options Interface
export interface generatorConfigObject {
  baseDir: string;
  filePatterns: string[];
  outputDir: string;
  outputFileName: string;
}
