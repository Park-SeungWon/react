import React, { useState, useEffect, useCallback } from "react";
import "./Board.css";

export default function Timer(props) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [timeSet, setTimeSet] = useState(false);
  const [SendData, setSendData] = useState(false);

  const Timeout = useCallback(() => {
    if (!SendData) {
      props.onChange("mode", "0");
      props.TimeOut();
    }
  }, [SendData, props]);

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
      //setTimeSet(true);
    }

    if (parseInt(seconds) === 0 && parseInt(minutes) === 0) {
      Timeout();
      setSendData(true);
    }
  }, [minutes, seconds, timeSet, setTimeSet, props.mode, Timeout, setSendData]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
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
  }, [minutes, seconds]);

  return (
    <div className="App">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
