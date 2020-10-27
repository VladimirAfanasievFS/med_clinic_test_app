import React from 'react';
import { ReactComponent as SeacrhIcon } from '../assets/searchIcon.svg';
import { ReactComponent as BellIcon } from '../assets/bellIcon.svg';
import { ReactComponent as Eye } from '../assets/eye.svg';
import clientLink from '../assets/client.svg';

const ProfileHeader = () => (
  <div className="row">
    <div className="col-2 x-bg-blue text-light" />
    <div className="col-10 x-bg-light-blue py-2 d-flex justify-content-between align-items-center">
      <div className="text-light h4">Мой профиль</div>
      <div>
        <div className="x-icon">
          <SeacrhIcon />
        </div>
        <div className="x-icon ml-4">
          <BellIcon className="x-icon" />
        </div>
        <div className="x-icon ml-4">
          <Eye fill="white" />
        </div>
        <img src={clientLink} className="ml-4 rounded-circle border border-white" width="40px" height="40px" alt="Client" />
        {/* <Client className="ml-4" /> */}
      </div>
    </div>
  </div>
);

export default ProfileHeader;
