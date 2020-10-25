import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthForm from '../components/AuthForm';
import AuthImg from '../components/AuthImg';
import PortalHeader from '../components/PortalHeader';
import Registration from './Registration';

const Auth = (props) => {
  console.log(props.match.params);
  return (
    <div>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-8">
            <PortalHeader />
            <Switch>
              <Route exact path="/signUp" component={AuthForm} />
              <Route path="/signUp/registration" component={Registration} />
            </Switch>
          </div>
          <div className="col-4 x-bg-blue">
            <AuthImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
