const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const schema = require('./schema');

console.log('dirname', path.resolve(__dirname, '/schema.graphql'))

const server = new GraphQLServer({
  typeDefs: schema.typeDefs,
  resolvers: resolvers
});

 server.start();