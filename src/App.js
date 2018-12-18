import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import HomeRoute from './HomeRoute';
import LoginRoute from './LoginRoute';
import CharacterDetailRoute from './CharacterDetailRoute';
import LoginService from './services/login.service'
import { connect } from 'react-redux'
import {setAuthAction, unsetAuthAction} from './actions/auth'


class App extends Component {
  handleLoginSubmit = e => {
    const formData = new FormData(e.target)
    LoginService.authenticate(formData.get('username'), formData.get('password'))
      .then(auth => this.props.dispatch(setAuthAction(auth)))
      .catch(() => this.props.dispatch(unsetAuthAction()))
  }

  handleLogoutClick = () => {
    this.props.dispatch(unsetAuthAction())
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.auth 
            ? (
              <React.Fragment>
                <button style={{position: 'fixed', right: '50px', top: '20px'}} 
                  onClick={this.handleLogoutClick}
                >
                  Logout
                </button>
                <Switch>
                  <Route exact path="/" component={HomeRoute} />
                  <Route exact path="/characters/:name" render={CharacterDetailRoute} />
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

export default connect(state => ({ auth: state.auth }))(App);
