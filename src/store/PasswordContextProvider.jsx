import React, { useState } from 'react';
import Ctx from './password-context';

export default function PasswordContextProvider(props) {
  const [length, setLength] = useState(16);
  const changeLength = e => setLength(e.target.value);
  const [configs, setConfigs] = useState({
    uppercase: true,
    lowercase: true,
    digits: true,
    symbols: true,
  });
  const toggleConfig = name => {
    const newConfigs = { ...configs };
    newConfigs[`${name}`] = newConfigs[`${name}`] ? false : true;
    setConfigs(newConfigs);
  };
  return (
    <Ctx.Provider
      value={{
        length,
        changeLength,
        toggleConfig,
        configs,
      }}
    >
      {props.children}
    </Ctx.Provider>
  );
}
