import React, { useState } from 'react';
import Password from '../components/Password';
import Strength from '../components/Strength';
import Length from '../components/Length';
import Configs from '../components/Configs';

export default function App() {
  return (
    <div className="app">
      <Password />
      <main>
        <Strength />
        <hr />
        <Length />
        <hr />
        <Configs />
      </main>
    </div>
  );
}
