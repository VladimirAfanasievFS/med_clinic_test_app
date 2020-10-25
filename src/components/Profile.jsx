import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { asyncActions } from '../slices';

const Profile = ({ isNotSign }) => {
  const dispatch = useDispatch();
  if (!isNotSign) {
    return <Redirect to="/signUp" />;
  }
  return (
    <div>
      {/* {isSign?.username} */}
      <button type="button" className="btn btn-success" onClick={() => dispatch(asyncActions.logout())}>Logout</button>
    </div>
  );
};

export default Profile;
