/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';

const customError = ({ children }) => <div className="text-danger">{children}</div>;
const phoneRegex = RegExp(
  // eslint-disable-next-line no-useless-escape
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
);

const validationSchema = Yup.object().shape({
  telephone: Yup.string().matches(phoneRegex, 'Invalid phone').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

// eslint-disable-next-line arrow-body-style
const RegistrationFormStep1 = ({ setActiveStep }) => {
  console.log(`111`)
  return (
    <Formik
      initialValues={{
        email: '', telephone: '', password: '', acceptPassword: '',
      }}
      onSubmit={(e, actions) => {
        console.log('actions', e);
        // await dispatch(asyncActions.login(values));
        // history.push('/');
        setActiveStep((prevStep) => prevStep + 1);
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="w-75 mx-auto">
          <div className="form-group">
            <Field type="text" name="email" className="form-control form-control-lg was-validated" placeholder="Почта" />
            <ErrorMessage name="email" component={customError} />
          </div>
          <div className="form-group">
            <Field type="text" name="telephone" className="form-control form-control-lg" placeholder="Телефон" />
            <ErrorMessage name="telephone" component={customError} />
          </div>
          <div className="form-group">
            <Field type="password" name="password" className="form-control form-control-lg" placeholder="Пароль" />
          </div>
          <div className="form-group">
            <Field type="password" name="acceptPassword" className="form-control form-control-lg" placeholder="Потверждение пароля" />
          </div>
          <div className="form-group form-check">
            <label htmlFor="acceptRules" className="form-check-label">
              <Field type="checkbox" name="acceptRules" className="form-check-input" />
              Я согласен на:
              <div className="ul">
                <li><a href="#">Обработку персональных данных (ФЗ 152)</a></li>
                <li>Передачу персональных данных третьим лицам</li>
                <li>Обращения для информирования и напоминания</li>
              </div>
            </label>
          </div>
          <div className="form-group ">
            <button type="submit" className="btn x-btn-violet w-100" disabled={isSubmitting}>Далее</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationFormStep1;
