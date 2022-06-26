import { InMemoryCache, ApolloClient } from "@apollo/client";
import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    cache,
    uri: "http://lalu-ag.default.svc.cluster.local:3007/graphql",
});

export const provider = createApolloProvider({
    defaultClient: apolloClient,
});