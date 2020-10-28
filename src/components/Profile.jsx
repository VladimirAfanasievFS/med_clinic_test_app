import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { take } from 'ramda';
import Appointment from './Appointment';
import ElectroCard from './ElectroCard';
import { getNewest } from '../lib';

const numberDisplay = 2;

const CountInfo = ({ count }) => {
  if (count > numberDisplay) {
    return (
      <>
        <span className="font-weight-bold">{`Еще ${count - numberDisplay} записей`}</span>
        <Link to="/account/appointments"> Подробнее </Link>
      </>
    );
  }
  if (count > 0) {
    return <></>;
  }
  return <div className="text-nowrap font-weight-bold">Записей нет</div>;
};
const Profile = () => {
  const appointments = useSelector((state) => state.appointments);
  const sortedAppointments = getNewest(appointments);
  const comingTwoAppointments = take(2, sortedAppointments);
  const countAppointment = appointments.length;
  return (
    <div className="pl-1">
      <div>
        <div className="m-2 font-weight-bolder">Записи на приём</div>
        <div className="d-flex justify-content-between">
          {comingTwoAppointments.map((appointment) => <Appointment appointment={appointment} />)}
          <div className="m-2 d-flex">
            <div className="my-auto">
              <CountInfo count={countAppointment} />
            </div>
          </div>
        </div>

      </div>
      <div>
        <div className="m-2 font-weight-bolder">Электронная карта</div>
        <div className="d-flex justify-content-between flex-wrap ">
          <ElectroCard />
        </div>

      </div>
    </div>
  );
};

export default Profile;
