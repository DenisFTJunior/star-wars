import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allPeople: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            return { ...existing, ...incoming };
          },
        },
      },
    },
  },
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "network-only",
    errorPolicy: "all",
    notifyOnNetworkStatusChange: true,
  },
  query: {
    fetchPolicy: "network-only",
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
