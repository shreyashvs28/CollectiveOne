import { useEffect, useRef, useState } from "react";

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    setSeconds(0);
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  useEffect(() => {
    return () => stop();
  }, []);

  return {
    seconds,
    start,
    stop,
    reset,
  };
};
