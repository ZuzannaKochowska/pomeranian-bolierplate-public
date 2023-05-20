import React from 'react';
import { Logo } from '../Components/Logo/Logo';
import './styles/header.css';

import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu' ;


export function AppHeader() {
  return (
    <header>
      <div>
        <Logo/>
        <HeaderMenu/>
        <div className="name-surname-container"> 
        <h4>Wojciech</h4>
        <h5>kursant</h5> 
        </div>
        
      </div>
    </header>
    
  );


}

;