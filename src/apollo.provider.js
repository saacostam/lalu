import { InMemoryCache, ApolloClient } from "@apollo/client";
import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    cache,
    uri: "http://10.252.5.109/graphql",
});

export const provider = createApolloProvider({
    defaultClient: apolloClient,
});