/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

// eslint-disable-next-line arrow-body-style
export default ({ setActiveStep }) => {
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        firstName: '', secondName: '', patronomic: '',
      }}
      onSubmit={(e, actions) => {
        // await dispatch(asyncActions.login(values));
        // history.push('/');
        // history.push('/sign');
        history.push('/signUp');
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="w-75 mx-auto">
          <div className="form-group">
            <Field type="text" name="firstName" className="form-control form-control-lg" placeholder="Имя" />
          </div>
          <div className="form-group">
            <Field type="text" name="secondName" className="form-control form-control-lg" placeholder="Фамилия" />
          </div>
          <div className="form-group">
            <Field type="text" name="patronymic" className="form-control form-control-lg" placeholder="Отчество" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn x-btn-violet w-100" disabled={isSubmitting}>Завершить</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
