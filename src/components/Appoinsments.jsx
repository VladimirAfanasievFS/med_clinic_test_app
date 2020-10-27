import React from 'react';
import Calendar from 'react-calendar';
import appoinsments from '../data/appointsments';
import Appoinsment from './Appoinsment';
import 'react-calendar/dist/Calendar.css';

const Appoinsments = () => (
  <div className="row">
    <div className="col-6 x-appointsment mh-50">
      {appoinsments.map((appointsment) => <Appoinsment appointsment={appointsment} />)}
    </div>
    <div className="col-6">
    
    <Calendar
                  // onChange={setValue}
                  // value={value}
                  // onClickDay={() => setValue(value)}
                  // grouped={grouped}
                  // tileContent={({ date }) => grouped.has(date.getTime()) && <span className="badge bg-light-blue rounded-circle">{grouped.get(date.getTime()).length}</span>}
                  className="mx-auto rounded"
                />
    </div>
  </div>
);

export default Appoinsments;
