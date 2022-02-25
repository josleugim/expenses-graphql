const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { merge } = require('lodash');

const categoryTypeDefs = require('./graphql/category/typeDefs');
const categoryResolvers = require('./graphql/category/resolvers');

const rootTypeDefs = `
type Query
type Mutation
schema {
  query: Query
  mutation: Mutation
}
`;

const schema = makeExecutableSchema({
    typeDefs: [rootTypeDefs, categoryTypeDefs],
    resolvers: merge(categoryResolvers)
})

const server = new ApolloServer({schema});

server
    .listen({ port: process.env.PORT || 8080 })
    .then(({url}) => {
        console.log(`GraphQL server running at ${url}`);
    })
