import React, { useEffect, useState } from 'react';
import './Timer.css'; // Make sure this points to your CSS file correctly

const Timer = () => {
  // Initial state setup for each time component
  const [time, setTime] = useState({
    years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [animate, setAnimate] = useState('');

  useEffect(() => {
    const targetDate = new Date('2022-01-03T00:00:00');
    let prevTime = { ...time };

    const updateTimer = () => {
      const now = new Date();
      const diff = now - targetDate;

      const years = now.getFullYear() - targetDate.getFullYear();
      let months = now.getMonth() - targetDate.getMonth() + (years * 12);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      months %= 12;

      const newTime = { years, months, days, hours, minutes, seconds };
      setTime(newTime);

      // Determine if seconds have changed for the animation
      if (prevTime.seconds !== newTime.seconds) {
        setAnimate('seconds');
        setTimeout(() => setAnimate(''), 500); // Reset animation class
      }

      prevTime = newTime;
    };

    const timerId = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to avoid 1 sec delay
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <div className="timer">
        {Object.entries(time).map(([unit, value]) => (
          <div key={unit} className={`time-component ${animate.includes(unit) ? 'animate' : ''}`}>
            <div className="count">{value}</div>
            <div className="unit">{unit}</div>
          </div>
        ))}
      </div>
      <div id="countdown">
        <div class="counter"><span b="--"></span><b>Years</b></div>
        <div class="counter"><span b="--"></span><b>Months</b></div>
        <div class="counter"><span b="--"></span><b>Days</b></div>
        <div class="counter"><span b="--"></span><b>Hrs</b></div>
        <div class="counter"><span b="--"></span><b>Min</b></div>
        <div class="counter"><span b="--"></span><b>Sec</b></div>
      </div>
    </>
  );
};

export default Timer;
