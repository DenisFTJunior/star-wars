import {
  ApolloClient,
  createHttpLink,
  DefaultOptions,
  InMemoryCache,
} from "@apollo/client";

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

const link = createHttpLink({
  uri: process.env.API_URL,
});

export const Client = new ApolloClient({
  link,
  cache,
  resolvers: {},
  defaultOptions,
});
