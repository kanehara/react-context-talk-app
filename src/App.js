import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import HomeRoute from './HomeRoute';
import LoginRoute from './LoginRoute';
import CharacterDetailRoute from './CharacterDetailRoute';
import LoginService from './services/login.service'

class App extends Component {
  state = {
    auth: null
  }

  handleLoginSubmit = e => {
    const formData = new FormData(e.target)
    LoginService.authenticate(formData.get('username'), formData.get('password'))
      .then(auth => this.setState({auth}))
      .catch(() => this.setState({auth: null}))
  }

  handleLogoutClick = () => {
    this.setState({auth: null})
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.auth 
            ? (
              <React.Fragment>
                <button style={{position: 'fixed', right: '50px', top: '20px'}} 
                  onClick={this.handleLogoutClick}
                >
                  Logout
                </button>
                <Switch>
                  <Route exact path="/" component={HomeRoute} />
                  <Route exact path="/characters/:name" render={() => <CharacterDetailRoute favoriteCharacter={this.state.auth.favoriteCharacter} />} />
                  <Redirect to="/" />
                </Switch>
              </React.Fragment>
            )
            : (
              <Switch>
                <Route path="/login" render={() => <LoginRoute onSubmit={this.handleLoginSubmit} />} />
                <Redirect to="/login" />
              </Switch>
            )
          }
        </div>
      </Router>  
    );
  }
}

export default App;
