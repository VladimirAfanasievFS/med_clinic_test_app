import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationFormStep1 from '../components/RegistrationFormStep1';
import RegistrationFormStep2 from '../components/RegistrationFormStep2';
import RegistrationFormStep3 from '../components/RegistrationFormStep3';
import RegistrationStep from '../components/RegistrationStep';

const forms = {
  1: (setActiveStep) => <RegistrationFormStep1 setActiveStep={setActiveStep} />,
  2: (setActiveStep) => <RegistrationFormStep2 setActiveStep={setActiveStep} />,
  3: (setActiveStep) => <RegistrationFormStep3 setActiveStep={setActiveStep} />,
};

const Registration = (props) => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <>
      <div className="pt-4 d-flex justify-content-around">
        <RegistrationStep index="1" text="Данные для входа" activeIndex={activeStep} />
        <RegistrationStep index="2" text="Личная информация" activeIndex={activeStep} />
        <RegistrationStep index="3" text="Представители" activeIndex={activeStep} />
      </div>
      <div className="pt-4">
        <div className="h2 text-center">Регистрация</div>
        <div className="text-center mb-4">
          У вас уже есть аккаунт?
          <Link to="/signUp">  Войти</Link>
        </div>
        {forms[activeStep](setActiveStep)}
      </div>
    </>
  );
};

export default Registration;
