import React from 'react';
import { useRef, useState, useEffect } from 'react';

function Timer(props) {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [timerOn, setTimerOn] = useState(true);
  let interval = useRef();
  let distance;

  const startTimer = () => {
    const countDownDate = new Date(props.deadline).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        //stop timer
        clearInterval(interval.current);
        setTimerOn(false);
      } else {
        //update
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  //componentDidMount
  useEffect(() => {
    startTimer();
    let i = interval.current;
    return () => {
      clearInterval(i);
    };
  });

  if (timerOn) {
    return (
      <span>
        Form Expires in {timerDays} days : {timerHours} hrs : {timerMinutes}{' '}
        mins : {timerSeconds} sec
      </span>
    );
  } else {
    return <span>Form has expired!</span>;
  }
}
export default Timer;
