import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://sa-east-1.cdn.hygraph.com/content/cl7jcw3500ojl01uhbdrpbs39/master",
  watch: true,
  watchConfig: {
    usePolling: true,
    interval: 1000,
  },

  documents: "./src/@codegen/docs/**/*.graphql",
  generates: {
    "./src/@codegen/gql/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
export default config;
