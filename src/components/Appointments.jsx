import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
import {
  equals, filter, includes, not, pluck, prop,
} from 'ramda';
import { Link, NavLink } from 'react-router-dom';
import Appointment from './Appointment';
import 'react-calendar/dist/Calendar.css';
import { getNewest } from '../lib';
import { ReactComponent as ArrowLeft } from '../assets/arrowLeftIcon.svg';

const Appointments = () => {
  const appointments = useSelector((state) => state.appointments);
  const [currentDate, setCurrentDate] = useState(null);

  const getDateString = (timestamp) => (new Date(timestamp * 1000)).toDateString();
  const isDate = (a) => (b) => equals(a, getDateString(prop('timestamp', b)));

  const currentAppointments = not(equals(currentDate, null))
    ? filter(isDate(currentDate.toDateString()), appointments)
    : appointments;

  const appointmentsDate = pluck('timestamp', appointments).map(getDateString);
  const isEmptyAppointments = currentAppointments.length === 0;
  return (
    <>
      <div className="p-2 d-flex">
        <div>
          <NavLink to="" className="ml-2 text-dark">
            <ArrowLeft className="m-2" />
            Мои записи
          </NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col-6 x-appointment">
          {(!isEmptyAppointments && currentDate) && (
          <div className="d-flex justify-content-end m-2">
            <Link
              href="/account/appointments"
              onClick={() => {
                setCurrentDate(null);
              }}
            >
              Показать все записи
            </Link>
          </div>

          )}
          { isEmptyAppointments && <div сlassName="font-weight-bolder">Отсутствуют записи за выбранную дату</div>}
          {getNewest(currentAppointments).map((appointment) => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
            />
          ))}
        </div>
        <div className="col-6">
          <Calendar
            onClickDay={setCurrentDate}
            tileContent={({ date }) => {
              if (!includes(date.toDateString(), appointmentsDate)) {
                return <></>;
              }
              return (
                <span className="badge x-bg-light-blue rounded-circle">
                  {filter(equals(date.toDateString()), appointmentsDate).length}
                </span>
              );
            }}
            className="mx-auto rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Appointments;
