import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IntlContainer from '../i18n';
import Home from './home';
import Product from './product';

const App = () => (
  <IntlContainer>
    <BrowserRouter>
      <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact render={() => (<Product typeCheck="test type check" />)} />
      </Fragment>
    </BrowserRouter>
  </IntlContainer>
);

export default App;
