import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from '../components/Signup/Signup';
import Signin from '../components/Signin/Signin';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" exact component={Signup} />
      <Route path="/signin" exact component={Signin} />
    </Switch>
  </BrowserRouter>
)