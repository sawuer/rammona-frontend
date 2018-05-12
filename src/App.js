import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Settings from './components/Settings/Settings';
import Transactions from './components/Transactions/Transactions';

class App extends Component {
  state = {
    redirect_to_root: false,
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          
          <Route path="/transactions" exact component={Transactions} />
          <Route path="/settings" exact component={Settings} />

          {this.props.user_token === '' ? <Redirect to = "/signin" /> : ''}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(({ signin: { user_token, user_email } }) => ({
  user_token,
  user_email,
}), {

})(App);