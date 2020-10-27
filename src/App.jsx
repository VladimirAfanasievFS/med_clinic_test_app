import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Account from './containers/Account';
import Auth from './containers/Auth';
import RegistrationSuccess from './containers/RegistrationSuccess';

const App = () => {
  const { user } = useSelector((state) => state.user);
  const isNotSign = !!user;
  console.log('App -> isNotSign', isNotSign);
  console.log('App -> user', user);
  return (
    <Switch>
      <Route exact path="/" render={() => (!isNotSign ? <Redirect to="/signUp" /> : <Redirect to="/account" />)} />
      <Route path="/signUp" component={Auth} />
      <Route path="/registrationSuccess" component={RegistrationSuccess} />
      <Route path="/account" component={Account} />
    </Switch>
  );
};

export default App;
