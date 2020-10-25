import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Auth from './containers/Auth';
import Registration from './containers/Registration';

const App = () => {
  const { user } = useSelector((state) => state.user);
  const isNotSign = !!user;
  console.log('App -> isNotSign', isNotSign);
  console.log('App -> user', user);
  return (
    <Switch>
      <Route exact path="/" render={() => <Profile isNotSign={isNotSign} />} />
      <Route path="/signUp" component={Auth} />
    </Switch>
  );
};

export default App;
