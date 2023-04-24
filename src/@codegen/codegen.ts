import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  watch: true,
  watchConfig: {
    usePolling: true,
    interval: 1000,
  },

  documents: './src/@codegen/docs/**/*.graphql',
  generates: {
    './src/@codegen/gql/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        'typescript-resolvers',
      ],
      config: { federation: true },
    },
  },
};
export default config;
