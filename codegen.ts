import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: 'src/gql/docs/**/*.ts',
  generates: {
    'src/gql/generated/graphql.ts': {
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
