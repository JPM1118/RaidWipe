const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

require('dotenv').config()

try {
  mongoose.connect(`mongodb+srv://JPM_13:${process.env.MONGO_PW}@cluster0-y5hkl.mongodb.net/raid-wipe?retryWrites=true&w=majority`, { useNewUrlParser: true })
} catch (e) {
  console.error(e)
}


// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const options = {
  host: 'localhost',
  port: 3100
}
server.listen(options).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});