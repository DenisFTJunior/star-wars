import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
    notifyOnNetworkStatusChange: true,
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  mutate: {
    errorPolicy: "all",
  },
};

export const Client = new ApolloClient({
  uri: `http://localhost:61475`,
  cache,
  resolvers: {},
  defaultOptions,
});
