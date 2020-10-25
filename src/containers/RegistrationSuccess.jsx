import React from 'react';
import { useHistory } from 'react-router-dom';
import imgLink from '../assets/registrationSuccess.svg';

const RegistrationSuccess = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push('/signUp');
  }
  return (
    <div>
      <div className="vh-100 x-bg-blue">
        <div className="d-flex py-4 mx-3 justify-content-between border-bottom x-border-smokey">
          <div className="text-light">Портал пациента</div>
          <div className="x-color-violet" />
        </div>
        <div className="d-flex flex-column h-100 align-items-center justify-content-start mt-5">
          <div className="h2 text-light">Вы успешно зарегистрировались</div>
          <img src={imgLink} className="my-4 img-fluid" alt="" />
          <button type="button" className="btn x-btn-violet" onClick={handleClick}>Давайте приступим</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
