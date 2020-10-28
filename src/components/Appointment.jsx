/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../slices';

const Appointment = ({ appointment }) => {
  const { dateHuman, address, doctor } = appointment;
  const dispatch = useDispatch();
  const handleClick = () => dispatch(actions.deleteAppoinstmentWithId(appointment.id));
  return (
    <div className="p-2 ">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title font-weight-bolder ">{dateHuman}</h5>
          <p className="card-text">{address}</p>
          <div className="d-flex">
            <img src={`${doctor.imgUrl}`} alt="doctor" width="60px" height="60px" className="rounded" />
            <div className="my-auto ml-3">
              <div className="font-weight-bolder ">{doctor.name}</div>
              <div className="text-secondary ">{doctor.specialty}</div>
            </div>
            <div className="my-auto ml-auto">
              <button type="button" className="btn x-btn-violet" onClick={handleClick}>Отменить</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Appointment;
