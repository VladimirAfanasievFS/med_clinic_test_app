import React from 'react';
import cn from 'classnames';
import {
  NavLink, Redirect, Route, Switch, useLocation,
} from 'react-router-dom';
import { ReactComponent as profileIcon } from '../assets/profileIcon.svg';
import { ReactComponent as goodToKnowIcon } from '../assets/goodToKnowIcon.svg';
import { ReactComponent as MessagesIcon } from '../assets/messagesIcon.svg';
import { ReactComponent as testIcon } from '../assets/testIcon.svg';
import { ReactComponent as doctorIcon } from '../assets/doctorIcon.svg';
import { ReactComponent as helpIcon } from '../assets/helpIcon.svg';
import ProfileHeader from '../components/ProfileHeader';
import Profile from '../components/Profile';
import Appointments from '../components/Appointments';

const items = [
  {
    id: 1,
    ImgLink: profileIcon,
    text: 'Профиль',
    linkTo: '/account/profile',
  },
  {
    id: 2,
    ImgLink: doctorIcon,
    text: 'Врачи и клиники',
    linkTo: '/account/doctors',
  },
  {
    id: 3,
    ImgLink: MessagesIcon,
    text: 'Сообщения',
    linkTo: '/account/messages',
  },
  {
    id: 4,
    ImgLink: testIcon,
    text: 'Тестирование',
    linkTo: '/account/test',
  },
  {
    id: 5,
    ImgLink: goodToKnowIcon,
    text: 'Полезно знать',
    linkTo: '/account/goodToKnow',
  },
];
const NavItem = ({
  ImgLink, text, linkTo,
}) => {
  const { pathname } = useLocation();
  const isActivePage = linkTo === pathname;
  const itemClassName = cn('py-3 mb-t x-nav-item', { 'x-nav-item_active': isActivePage });
  return (
    <div className="x-bg-blue pb-2 ">
      <div className={itemClassName}>
        <ImgLink className="ml-3" fill={isActivePage ? '#7761FF' : 'white'} />
        <span className="ml-3">
          {text}
        </span>
        <NavLink to={linkTo} className="ml-2 x-nav-link">{text}</NavLink>
      </div>
    </div>
  );
};

const Account = () => {
  const DD = '';
  return (
    <div className="container-fluid h-100">
      <ProfileHeader />
      <div className="row  h-75">
        <div className="col-2 x-bg-blue p-0 d-flex flex-column ">
          {items.map(({
            id, ImgLink, text, linkTo,
          }) => (
            <NavItem
              key={id}
              ImgLink={ImgLink}
              text={text}
              linkTo={linkTo}
            />
          ))}
          <div className="text-center">
            <button type="button" className="btn x-btn-violet">Подать заявку</button>
          </div>
          <div className="mt-auto">
            <NavItem
              ImgLink={helpIcon}
              text="Помощь"
              linkTo="/help"
            />
          </div>
        </div>
        <div className="col-10 bg-light">
          <Switch>
            <Route path="/account/profile"><Profile /></Route>
            <Redirect exact from="/account" to="/account/profile" />
            <Route path="/account/doctors"><>Доктора</></Route>
            <Route path="/account/messages"><>Messages</></Route>
            <Route path="/account/test"><>Test</></Route>
            <Route path="/account/goodToKnow"><>goodToKnow</></Route>
            <Route path="/account/appointments"><Appointments /></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Account;
