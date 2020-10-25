import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { NavLink, Redirect } from 'react-router-dom';
import { asyncActions } from '../slices';
import { ReactComponent as profileIcon } from '../assets/profileIcon.svg';
import { ReactComponent as goodToKnowIcon } from '../assets/goodToKnowIcon.svg';
import { ReactComponent as MessagesIcon } from '../assets/messagesIcon.svg';
import { ReactComponent as testIcon } from '../assets/testIcon.svg';
import { ReactComponent as doctorIcon } from '../assets/doctorIcon.svg';

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
  ImgLink, text, linkTo, children, active,
}) => {
  console.log('NavItem -> children', children);
  console.log('NavItem -> ImgLink', ImgLink);

  const itemClassName = cn('py-3 mb-t x-nav-item', { 'x-nav-item_active': active });
  return (
    <div className="x-bg-blue pb-2 ">
      <div className={itemClassName}>
        <ImgLink className="ml-2" fill={active ? '#7761FF' : 'white'} />
        <NavLink to={linkTo} className="ml-2 x-nav-link">{text}</NavLink>
      </div>
    </div>
  );
};

const Profile = ({ isNotSign }) => {
  const dispatch = useDispatch();
  if (!isNotSign) {
    return <Redirect to="/signUp" />;
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 x-bg-blue py-4">
          логотип
        </div>
        <div className="col-10 x-bg-light-blue py-4" />
      </div>
      <div className="row vh-100 ">
        <div className="col-2 x-bg-blue p-0">
          {items.map(({
            id, ImgLink, text, linkTo,
          }) => (
            <NavItem
              key={id}
              ImgLink={ImgLink}
              text={text}
              linkTo={linkTo}
              active
            />
          ))}
        </div>
        <div className="col-10 bg-light" />
      </div>
    </div>
  );
};

export default Profile;

// { /* <button type="button" className="btn btn-success" onClick={() => dispatch(asyncActions.logout())}>Logout</button> */ }
