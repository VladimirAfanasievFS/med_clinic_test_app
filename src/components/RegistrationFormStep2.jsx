/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
// eslint-disable-next-line arrow-body-style
export default ({ setActiveStep }) => {
  return (
    <Formik
      initialValues={{
        firstName: '', secondName: '', patronomic: '',
      }}
      onSubmit={(e, actions) => {
        // await dispatch(asyncActions.login(values));
        // history.push('/');
        setActiveStep((prevStep) => prevStep + 1);
      }}
    >
      {({ isSubmitting }) => (
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
          <div className="form-group ">
            <button type="submit" className="btn x-btn-violet w-100" disabled={isSubmitting}>Далее</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
