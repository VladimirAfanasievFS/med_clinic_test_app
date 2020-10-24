import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { asyncActions } from '../../slices';

const AuthForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => { dispatch(asyncActions.login(values)); }}
      >
        {({ isSubmitting }) => (
          <Form className="w-50 m-auto">
            <div className="h2 text-center">Вход</div>
            <div className="form-group">
              <div className="text-center">
                У вас нет аккаунта?
                <a href="#">  Зарегистрироваться</a>
              </div>
            </div>
            <div className="form-group">
              <Field type="email" name="username" className="form-control form-control-lg" placeholder="Почта или телефон" />
            </div>
            <div className="form-group">
              <Field type="password" name="password" className="form-control form-control-lg" placeholder="Пароль" />
            </div>
            <div className="form-group">
              Забыли пароль?
              <a href="#">  Восстановить</a>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Войти</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
