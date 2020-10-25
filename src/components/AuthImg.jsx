import React from 'react';
import imgLink from '../assets/auth.svg';

const SideImg = () => (
  <div className="d-flex flex-column h-100 align-items-center justify-content-center">
    <div className="h2 text-light">Добро пожаловать!</div>
    <img src={imgLink} className="my-4 img-fluid" alt="" />
    <div className="text-light">Вместе с нами медицина стала проще</div>
  </div>
);

export default SideImg;
