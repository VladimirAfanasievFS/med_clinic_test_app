import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ReactComponent as SeacrhIcon } from '../assets/searchIcon.svg';
import { ReactComponent as BellIcon } from '../assets/bellIcon.svg';
import { ReactComponent as Eye } from '../assets/eye.svg';
import clientLink from '../assets/client.svg';
import { asyncActions } from '../slices';

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = async () => {
    await dispatch(asyncActions.logout());
    history.push('/');
  };
  return (
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
          <img src={clientLink} className="ml-4 rounded-circle border border-white" width="50px" height="50px" alt="Client" />
          <button type="button" className="btn x-btn-violet ml-4" onClick={handleClick}>Выйти</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
