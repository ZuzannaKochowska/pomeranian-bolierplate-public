import { Button } from '../Button/Button';
import { useState, useEffect } from 'react';
import { Menu } from '../Menu/Menu';

export const Result = ({ score, setScore, time }) => {
  return (
    <>
      <h3>
        `Gratulacje! Twój wynik to ${score} złapane kreciki w czasie {time}{' '}
        minut/y`
      </h3>
    </>
  );
};
