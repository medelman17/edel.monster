import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./schemas/schema",
  outputPath: "../web/src/lib/sanity/schema.ts",
};

export default config;
