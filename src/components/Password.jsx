import React, { useState, useEffect, useContext } from 'react';
import { BiRefresh as Refresh } from 'react-icons/bi';
import {
  HiOutlineClipboardCopy as Copy,
  HiClipboardCopy as Copied,
} from 'react-icons/hi';
import passwordContext from '../store/password-context';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const getRandomNumberTo = max => Math.floor(Math.random() * max);
const generatePassword = (l, configs) => {
  const { uppercase: uc, lowercase: lc, digits: dg, symbols: sy } = configs;

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const symbols = '!@#$%^&*()';

  const passwordChars = `${uc ? uppercase : ''}${lc ? lowercase : ''}${
    dg ? digits : ''
  }${sy ? symbols : ''}`;

  const password = Array.from({ length: l }, () =>
    getRandomNumberTo(passwordChars.length),
  )
    .map(n => passwordChars[n])
    .join('');

  return password;
};

export default function Password() {
  const ctx = useContext(passwordContext);
  const [password, setPassword] = useState(
    generatePassword(ctx.length, ctx.configs),
  );
  const [copied, setCopied] = useState(false);

  const newPassword = () => {
    setPassword(generatePassword(ctx.length, ctx.configs));
    setCopied(false);
  };

  useEffect(() => {
    newPassword();
  }, [ctx]);

  return (
    <div className="password">
      <div className="password__content">{password}</div>
      <div className="password__actions">
        <CopyToClipboard text={password} onCopy={() => setCopied(true)}>
          <button>
            {copied ? <Copied title="Copied" /> : <Copy title="Copy" />}
          </button>
        </CopyToClipboard>
        <button onClick={newPassword}>
          <Refresh title="Generate a new password" />
        </button>
      </div>
    </div>
  );
}
