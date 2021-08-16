const users = [
  {id: 1, name: 'Caio', email: 'alvescaio@github.com'},
  {id: 2, name: 'João', email: 'joao@github.com'}
]

module.exports = {
  Query: {
      getUsers: () => users,
      getUser: async (_) => users[0]
  },
  Mutation: {
      addUser: () =>{}
  }
}