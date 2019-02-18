const USERS = {
  morty: {
    password: 'jessica',
    favoriteCharacter: 'Bird Person',
    token: 'mortytoken'
  },
  rick: {
    password: 'c137',
    favoriteCharacter: 'Noop Noop',
    token: 'ricktoken'
  }
}

const loginService = {
  authenticate: async (user, password) => USERS[user] && USERS[user].password === password
    ? USERS[user]
    : null
}

export default loginService
