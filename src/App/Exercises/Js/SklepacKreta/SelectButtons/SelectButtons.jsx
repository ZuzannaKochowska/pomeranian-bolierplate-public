import './SelectButtons.css';
import { useState } from 'react';
import { Button } from '../Button/Button';

export const SelectButtons = (props) => {
  //props.options
  const { options } = props;

  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (value) => {
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value,
        };
      })
    );
  };
  return (
    <>
      {newOptions.map(({ value, isActive, label }) => (
        <Button
          key={value}
          onClick={() => handleClick(value)}
          isActive={isActive}
        >
          {label}
        </Button>
      ))}
    </>
  );
};
