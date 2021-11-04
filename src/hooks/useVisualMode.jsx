// import React and hooks
import React, { useState } from "react";

export default function useVisualMode(initial) {
  // states for mode and history
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // controls transition component and animation
  const transition = function(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), newMode]);
    } else {
      setHistory(prev => [...prev, newMode]);
    }
  }
  // lets user go back and cancel edits
  // keeps old data in history
  const back = function () {
    if (history.length > 1) {
      setMode(history[history.length -2]);
  
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
  }

  return { mode, transition, back };
}