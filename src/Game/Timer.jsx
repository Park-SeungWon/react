import React, { useState, useEffect } from "react";
import "./Board.css";

export default function Timer(props) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [timeSet, setTimeSet] = useState(false);
  const [SendData, setSendData] = useState(false);

  const Timeout = () => {
    if (!SendData) {
      props.onChange("mode", "0");
      props.TimeOut();
    }
  };

  useEffect(() => {
    if (!timeSet) {
      if (props.mode === "a") {
        setMinutes(1);
        setSeconds(0);
      }
      if (props.mode === "b") {
        setMinutes(0);
        setSeconds(50);
      }
      if (props.mode === "c") {
        setMinutes(0);
        setSeconds(40);
      }
      if (props.mode === "d") {
        setMinutes(0);
        setSeconds(30);
      }
      if (props.mode === "test") {
        setMinutes(0);
        setSeconds(2);
      }
      setTimeSet(true);
    }
    
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          Timeout();
          setSendData(true);
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, [minutes, seconds, timeSet, setTimeSet, props.mode]);

  return (
    <div className="App">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
