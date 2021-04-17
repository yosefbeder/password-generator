import React, { useState } from 'react';
import { BsCheck as Check } from 'react-icons/bs';
import passwordContext from '../../store/password-context';

export default function Checkbox(props) {
  const checkHandler = () => {
    props.toggleCheck(props.value);
  };

  return (
    <div className="checkbox">
      <div
        className={`checkbox__input ${props.checked ? 'checked' : ''}`}
        onClick={checkHandler}
      >
        {props.checked ? <Check /> : null}
      </div>
      <div className="checkbox__title" onClick={checkHandler}>
        {props.value}
      </div>
    </div>
  );
}
