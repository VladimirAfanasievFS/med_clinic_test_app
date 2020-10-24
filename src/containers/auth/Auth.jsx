import React from 'react';
import { ReactComponent as AuthImg } from '../../assets/auth.svg';
import AuthForm from '../../components/authForm/AuthForm';

const Auth = () => {
  console.log('Auth -> Auth');
  return (
    <div>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-7 align-self-center">
            <AuthForm />
          </div>
          <div className="col-5 x-bg-blue">
            <div className="d-flex flex-column h-100 align-items-center justify-content-center">
              <div className="h2 text-light">Добро пожаловать!</div>
              <AuthImg className="my-4" />
              <div className="text-light">Вместе с нами медицина стала проще</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
