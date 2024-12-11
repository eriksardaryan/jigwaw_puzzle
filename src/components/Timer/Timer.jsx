import React, { useEffect } from "react";

export default function Timer({ time, setTime, timerActive }) {
  useEffect(() => {
    let interval = null;
    if (timerActive)
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    else clearInterval(interval);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerActive]);

  return <p>Time: {time}s</p>;
}
