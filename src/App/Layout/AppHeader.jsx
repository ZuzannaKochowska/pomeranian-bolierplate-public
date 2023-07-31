import React from 'react';

import '../Components/HeaderMenu/styles.css';

import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';
import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  return (
    <header>
      <Logo />

      <HeaderMenu />
    </header>
  );
}
