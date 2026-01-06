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
export interface ContactObject {
  name?: string;
  email?: string;
  url?: string;
}

export interface ExternalDocsObject {
  description?: string;
  url: string;
}

export interface TagObject {
  name: string;
  description?: string;
  externalDocs?: ExternalDocsObject;
}

// Server Variables Interface
export interface ServerVariablesObject {
  enum?: string[];
  default: string;
  description?: string;
}

// Server Interface
export interface ServerObject {
  url: string;
  description?: string;
  variables?: Record<string, ServerVariablesObject>;
}

// Security Requirement Interface
export interface SecurityRequirementObject {
  [securitySchemeName: string]: string[];
}

// License Interfaces
interface LicenseWithIdentifier {
  name: string;
  identifier: string;
  url?: never;
}
interface LicenseWithUrl {
  name: string;
  url: string;
  identifier?: never;
}

// Info Interface
export interface InfoObject {
  title: string;
  version: string;
  summary?: string;
  description?: string;
  termsOfService?: string;
  contact?: ContactObject;
  license?: LicenseWithIdentifier | LicenseWithUrl;
}

// Docs-Generator-Options Interface
export interface generatorConfigObject {
  baseDir: string;
  filePatterns: string[];
  outputDir: string;
  outputFileName: string;
}
