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

  function logPromiseState(promise) {
    promise
    .then(() => { //success
      console.log('Stan: fullfilled');
      console.log('Promise zakończony sukcesem');
    })
    .catch(() => { //failed
      console.log('Stan: rejected');
      console.log('Promise zakonczony błędem');
    })
    .finally(() => {//nevermind, I will do this
      console.log('Stan: ');
      console.log('Promise zakonczony ');
    })
  }
 

  const myPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      const random = Math.random();

      if(random < 0.5) {
        resolve();
      } else {
        rejected();
      }

    })
    logPromiseState(myPromise);
  });

  return(
    <div> dziala </div>
  )
};
 