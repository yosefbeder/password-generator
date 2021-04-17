import React from 'react';

export default function Input(props) {
  return (
    <input
      className="input--number"
      type="number"
      value={props.value}
      onChange={props.onInputChange}
      min={props.min}
      max={props.max}
    />
  );
}
