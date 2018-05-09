import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signup from '../components/Signup/Signup';

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/signup" exact component={Signup} />
    </div>
  </BrowserRouter>
)