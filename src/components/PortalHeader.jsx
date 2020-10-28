import React from 'react';
import { ReactComponent as EyeIcon } from '../assets/eye.svg';

export default () => (
  <div className="d-flex py-4 mx-3 justify-content-between border-bottom x-border-smokey">
    <div>Портал пациента</div>
    <div className="x-color-violet">
      <EyeIcon className="mr-2 mb-1" fill="#7761FF" />
      Версия для слабовидящих
    </div>
  </div>
);
