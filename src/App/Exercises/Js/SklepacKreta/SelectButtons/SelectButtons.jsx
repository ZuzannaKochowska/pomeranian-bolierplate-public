import './SelectButtons.css';
import { useState } from 'react';
import { Button } from '../Button/Button';

export const SelectButtons = (props) => {
  //props.options
  const {options} = props;
  return ( 
  <>
    {options.map(({value, isActive, label}) => (
    
    <Button key={value} isActive={isActive}>
      {label}
    </Button>
   
    ))}
  </>
  );
};

