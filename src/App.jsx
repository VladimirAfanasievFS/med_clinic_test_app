import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './containers/auth/Auth';
import { asyncActions } from './slices';

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  if (user) {
    return (
      <div className="">
        {user.username}
        <button type="button" className="btn btn-success" onClick={() => dispatch(asyncActions.logout())}>Logout</button>
      </div>
    );
  }
  return <Auth />;
};

export default App;
