import React, { useContext, useState } from 'react';
import Input from './UI/Input';
import Range from './UI/Range';
import passwordContext from '../store/password-context';

export default function Length() {
  const ctx = useContext(passwordContext);
  const value = ctx.length;
  const [min, max] = [1, 50];

  childProps = {
    value: value,
    onInputChange: ctx.changeLength,
    min: min,
    max: max,
  };

  return (
    <div className="length">
      <div className="length__top">
        <span>Length:</span> <Input {...childProps} />
      </div>
      <Range {...childProps} />
    </div>
  );
}
