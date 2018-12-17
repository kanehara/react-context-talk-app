const USERS = {
  morty: {
    password: 'jessica',
    favoriteCharacter: 'Bird Person'
  },
  rick: {
    password: 'c137',
    favoriteCharacter: 'Snoop Snoop'
  }
}

const loginService = {
  authenticate: async (user, password) => USERS[user] && USERS[user].password === password
    ? USERS[user]
    : null
}

export default loginService
