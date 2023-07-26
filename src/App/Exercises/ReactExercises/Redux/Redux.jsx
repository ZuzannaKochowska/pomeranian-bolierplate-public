import React from 'react';

import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  increment,
  decrement,
  incrementByValue,
} from '../../../../Store/slices/counterSlice';

export function Redux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState('1');

  const handleAdd = () => dispatch(increment());

  const handleDec = () => dispatch(decrement());

  const handleSubVal = () => dispatch(incrementByValue(incrementValue));

  const handleIncByVal = (event) => {
    const value = event.target.value;

    setIncrementValue(value);
  };
  //   const testValue = useSelector((state) => {
  //     console.log(state, 'store aplikacji w ćwiczeniu Reduxa');
  //     return state?.storeTest?.value ?? 'Not working';
  //   });
  return (
    <div>
      <div> Nasz count: {count}</div>
      <button onClick={handleAdd}>Dodaj</button>
      <button onClick={handleDec}>Odejmij</button>
      <input onChange={handleIncByVal} type="text" value={incrementValue} />
      <button onClick={handleSubVal}>Dodaj {incrementValue}</button>
    </div>
  );
}
