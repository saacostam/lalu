import { InMemoryCache, ApolloClient } from "@apollo/client";
import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    cache,
    // uri: "http://34.174.125.175:3007/graphql",
    // uri: "http://lalu-ag:3007/graphql"
    uri: "https://35.223.151.61.nip.io/graphql"
});

export const provider = createApolloProvider({
    defaultClient: apolloClient,
});