module.exports = {
  typeDefs: `type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }
  type User {
      id: ID!
      name: String!
      email: String!
  }
  type Mutation {
      addUser(fullname: String!, username: String!, phone_number: String!, city: String!): User!,
      deleteUser(id: ID!): String
  }`}
