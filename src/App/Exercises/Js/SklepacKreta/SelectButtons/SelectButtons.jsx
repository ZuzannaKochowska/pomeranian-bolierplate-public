import './SelectButtons.css';
import { useState, useEffect } from 'react';
import { Button } from '../Button/Button';

export const SelectButtons = (props) => {
  //props.options
  const { options, setOptionChosen } = props;
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (value) => {
    setNewOptions(
      newOptions.map((option) => {
        return {
          ...option,
          isActive: option.value === value ? true : false,
        };
      })
    );

    const chosenOption = newOptions.find((option) => option.value === value);
    setOptionChosen(chosenOption.value * 60);
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
