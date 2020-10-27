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
import { ReactComponent as helpIcon } from '../assets/helpIcon.svg';
import ProfileHeader from './ProfileHeader';
import Records from './Records';

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

const Profile = ({ isNotSign }) => {
  const dispatch = useDispatch();
  if (!isNotSign) {
    return <Redirect to="/signUp" />;
  }
  return (
    <div className="container-fluid h-100">
      <ProfileHeader />
      <div className="row  h-75">
        <div className="col-2 x-bg-blue p-0 d-flex flex-column justify-content-between">
          <div>
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
          </div>
          <div>
            <NavItem
              ImgLink={helpIcon}
              text="Помощь"
              linkTo="/help"
            />
          </div>

        </div>
        <div className="col-10 bg-light">
          <div>
            <div>
              <div>Записи на приём</div>
              <Records />
            </div>
            <div>
              <div>Электронная карта</div>
              <Records />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;

// { /* <button type="button" className="btn btn-success" onClick={() => dispatch(asyncActions.logout())}>Logout</button> */ }
