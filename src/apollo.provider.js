import { InMemoryCache, ApolloClient } from "@apollo/client";
import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    cache,
    uri: "//lalu-ag/graphql",
});

export const provider = createApolloProvider({
    defaultClient: apolloClient,
});