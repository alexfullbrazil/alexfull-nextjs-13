import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://sa-east-1.cdn.hygraph.com/content/cl7jcw3500ojl01uhbdrpbs39/master",
  cache: new InMemoryCache(),
});
