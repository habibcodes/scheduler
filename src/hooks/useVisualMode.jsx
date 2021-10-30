import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), newMode]);
    } else {
      setHistory(prev => [...prev, newMode]);
    }
  }
  
  const back = function () {
    if (history.length > 1) {
      setMode(history[history.length -2]);
  
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
  } 

  // console.log(mode);
  // console.log(transition);
  // console.log(mode);
  // console.log(back);
  // console.log(mode);

  return { mode, transition, back };
}