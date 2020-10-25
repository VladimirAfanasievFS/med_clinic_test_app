/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';

const customError = ({children}) => <div className="text-danger">{children}</div>;
const phoneRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
);

const validationSchema = Yup.object().shape({
  telephone: Yup.string().matches(phoneRegex, 'Invalid phone').required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

// eslint-disable-next-line arrow-body-style
const RegistrationFormStep1 = ({ setActiveStep }) => {
  return (
    <div>
      <Formik
        initialValues={{
          email: '', telephone: '', password: '', acceptPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(e, actions) => {
          // await dispatch(asyncActions.login(values));
          // history.push('/');
          setActiveStep((prevStep) => prevStep + 1);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="w-75 mx-auto">
            <div className="form-group">
              <Field type="text" name="email" validate={errors.email} className="form-control form-control-lg" placeholder="Почта" />
              <ErrorMessage name="email" component={customError} />
            </div>
            <div className="form-group">
              <Field type="text" name="telephone" className="form-control form-control-lg" placeholder="Телефон" />
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
    </div>
  );
};

export default RegistrationFormStep1;
