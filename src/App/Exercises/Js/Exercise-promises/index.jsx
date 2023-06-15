import { useEffect, useState} from 'react';
import './styles.css';


export function Exercise_promises(personalData, apiData) {

  const[getState, setState] = useState(null);

  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log('Wykonuje operacje cykliczną...');
    }, 5000);

    //cleanup function inside useEffect
    return () => {
      clearInterval(timer);
      console.log('Zatrzymaj operacje cykliczną...Wykonuje clean up');
    };
    //to possible options to kick useEffect and cause rerender of the component

  }, [ getState]);

  return(
    <div> dziala </div>
  )
};
 