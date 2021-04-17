import React, { useRef } from 'react';

export default function Range(props) {
  const { value, min, max } = props;
  const inputEl = useRef(null);

  changeHanldler = e => {
    props.onInputChange(e);
  };

  return (
    <div className="range">
      <div className="range__min">{min}</div>
      <input
        type="range"
        className="range__input"
        value={value}
        min={min}
        max={max}
        ref={inputEl}
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-primary) ${
            value * 2
          }%, var(--color-grey-light) ${value * 2}%, var(--color-grey-light)) `,
        }}
        onChange={changeHanldler}
      />
      <div className="range__max">{max}</div>
    </div>
  );
}
