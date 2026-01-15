// Validate Options Interface
interface ValidateOptions {
  configFilePath: string;
}

// Generate Options Interface
interface GenerateOptions extends ValidateOptions {
  validateConfigFile: boolean;
}

// validate function type declaration
export declare function validate(options: ValidateOptions): Promise<void>;

// generate function type declaration
export declare function generate(options: GenerateOptions): Promise<void>;
