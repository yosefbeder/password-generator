import React, { useState, useContext } from 'react';
import {
  BiCheckShield as Secured,
  BiShieldX as UnSecured,
} from 'react-icons/bi';
import passwordContext from '../store/password-context';

export default function Strength() {
  const ctx = useContext(passwordContext);
  const strength =
    ctx.length < 8 ? 'weak' : ctx.length < 12 ? 'fairly-strong' : 'strong';

  return (
    <div className="strength">
      <span>Strength:</span>{' '}
      <span className={strength}>
        {/* fairly-strong or weak */}
        {strength === 'weak' || strength === 'fairly-strong' ? (
          <UnSecured />
        ) : (
          <Secured />
        )}
        {strength === 'fairly-strong' ? 'fairly strong' : strength}
      </span>
    </div>
  );
}
