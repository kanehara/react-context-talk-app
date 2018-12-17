import React from 'react'

class LoginRoute extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <input name='username' placeholder='username' />
          </div>
          <div>
            <input name='password' placeholder='password' type='password' />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default LoginRoute
