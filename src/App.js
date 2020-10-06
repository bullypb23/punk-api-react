import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Wrapper } from './App.styles';
import Global from './Global';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <Wrapper>
      <Global />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </Wrapper>
  );
}

export default withRouter(App);
