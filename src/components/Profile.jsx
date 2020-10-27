import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { Link, NavLink, Redirect } from 'react-router-dom';
import {
  sort, descend, prop, take, ascend,
} from 'ramda';
import { asyncActions } from '../slices';
import { ReactComponent as profileIcon } from '../assets/profileIcon.svg';
import { ReactComponent as goodToKnowIcon } from '../assets/goodToKnowIcon.svg';
import { ReactComponent as MessagesIcon } from '../assets/messagesIcon.svg';
import { ReactComponent as testIcon } from '../assets/testIcon.svg';
import { ReactComponent as doctorIcon } from '../assets/doctorIcon.svg';
import { ReactComponent as helpIcon } from '../assets/helpIcon.svg';
import ProfileHeader from './ProfileHeader';
import Appoinsment from './Appoinsment';
import ElectroCard from './ElectroCard';
import appoinsments from '../data/appointsments';

const items = [
  {
    id: 1,
    ImgLink: profileIcon,
    text: 'Профиль',
    linkTo: '/',
  },
  {
    id: 2,
    ImgLink: doctorIcon,
    text: 'Врачи и клиники',
    linkTo: '/doctors',
  },
  {
    id: 3,
    ImgLink: MessagesIcon,
    text: 'Сообщения',
    linkTo: '/messages',
  },
  {
    id: 4,
    ImgLink: testIcon,
    text: 'Тестирование',
    linkTo: '/test',
  },
  {
    id: 5,
    ImgLink: goodToKnowIcon,
    text: 'Полезно знать',
    linkTo: '/goodToKnow',
  },
];
const NavItem = ({
  ImgLink, text, linkTo, active,
}) => {
  const itemClassName = cn('py-3 mb-t x-nav-item', { 'x-nav-item_active': active });
  return (
    <div className="x-bg-blue pb-2 ">
      <div className={itemClassName}>
        <ImgLink className="ml-3" fill={active ? '#7761FF' : 'white'} />
        <span className="ml-3">
          {text}
        </span>
        <NavLink to={linkTo} className="ml-2 x-nav-link">{text}</NavLink>
      </div>
    </div>
  );
};

const Profile = () => {
  const sortedAppointsments = sort(ascend(prop('timestamp')), appoinsments);
  const comingTwoAppointsments = take(2, sortedAppointsments);
  return (
    <div className="pl-1">
      <div>
        <div>Записи на приём</div>
        <div className="d-flex justify-content-between">
          {comingTwoAppointsments.map((appointsment) => <Appoinsment appointsment={appointsment} />)}
          <div className="m-2 d-flex">
            <div className="my-auto">
              <span>Еще 3 записи</span>
              <Link to="/account/appointsments"> Подробнее </Link>
            </div>
          </div>
        </div>

      </div>
      <div>
        <div>Электронная карта</div>
        <div className="d-flex justify-content-between flex-wrap ">
          <ElectroCard />
        </div>

      </div>
    </div>
  );
};

export default Profile;
