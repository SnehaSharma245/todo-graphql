import { ApolloServer } from "@apollo/server";

import { typeDefs } from "./typedefs/typedef";
import { resolvers } from "./resolvers/resolvers";

async function createApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      ...resolvers,
    },
    introspection: true, // Enable introspection for development
  });
  return server;
}

export default createApolloServer;
