import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { asyncActions } from '../slices';

const AuthForm = withRouter(({ history }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={async (values) => {
        await dispatch(asyncActions.login(values));
        history.push('/');
      }}
    >
      {({ isSubmitting }) => (
        <Form className="w-50 mt-5 mx-auto">
          <div className="h2 text-center">Вход</div>
          <div className="form-group">
            <div className="text-center">
              У вас нет аккаунта?
              <Link to="/signUp/registration">  Зарегистрироваться</Link>
            </div>
          </div>
          <div className="form-group">
            <Field type="text" name="username" className="form-control form-control-lg" placeholder="Почта или телефон" />
          </div>
          <div className="form-group">
            <Field type="password" name="password" className="form-control form-control-lg" placeholder="Пароль" />
          </div>
          <div className="form-group">
            Забыли пароль?
            <Link to="/signUp/recoveryPassword">  Восстановить</Link>
          </div>
          <div className="form-group">
            <button type="submit" className="btn x-btn-violet w-100" disabled={isSubmitting}>Войти</button>
          </div>
        </Form>
      )}
    </Formik>
  );
});

export default AuthForm;
