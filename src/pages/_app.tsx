import { ApolloProvider } from '@apollo/client';
import { client } from '@/contexts/graphql-context';
import type { AppProps } from 'next/app';

import '@fontsource/inter/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/plus-jakarta-sans/800.css';
import '@fontsource/plus-jakarta-sans/400.css';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
