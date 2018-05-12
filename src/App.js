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

  componentDidMount = () => {
    if (this.props.user_token === '') {
      this.setState({ redirect_to_root: true });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          
          <Route path="/transactions" exact component={Transactions} />
          <Route path="/settings" exact component={Settings} />
          {this.state.redirect_to_root ? <Redirect to = "/signin" /> : ''}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(state => ({
  user_token: state.user_token,
  user_email: state.user_email,
}), {
})(App);