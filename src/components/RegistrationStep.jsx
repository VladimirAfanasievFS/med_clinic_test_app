import React from 'react';
import cn from 'classnames/bind';
import styles from './RegistrationStep.module.scss';

const cx = cn.bind(styles);

const RegistrationStep = ({ index, text, activeIndex }) => {
  const isActive = Number(index) === activeIndex;
  return (
    <div>
      <div className={cx({ index, index_active: isActive })}>{index}</div>
      <div className={cx({ text, text_active: isActive })}>{text}</div>
    </div>
  );
};

export default RegistrationStep;
