import React, { useContext } from 'react';
import Checkbox from './UI/Checkbox';
import passwordContext from '../store/password-context';

export default function Configs() {
  const ctx = useContext(passwordContext);
  const checkboxes = Object.entries(ctx.configs).map((config, i) => {
    return (
      <Checkbox
        key={i}
        value={config[0]}
        checked={config[1]}
        toggleCheck={ctx.toggleConfig}
      />
    );
  });

  return (
    <div className="configs">
      <span>Configs</span>
      <div className="configs__content">{checkboxes}</div>
    </div>
  );
}
