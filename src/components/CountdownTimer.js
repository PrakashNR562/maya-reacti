import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay - now;
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const hours = Math.floor((diff / 1000 / 60 / 60) % 24);

      const formattedCountdown = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      setCountdown(formattedCountdown);
    };

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);
  const countdownArr = countdown.split(":");

  return (
    <div>
      <div className="countdown-timer">
        <ul className="flexcenter">
          <li>1</li>
          <li>{countdownArr[0]}</li>
          <li>{countdownArr[1]}</li>
          <li>{countdownArr[2]}</li>
        </ul>
      </div>
    </div>
  );
};

export default CountdownTimer;
