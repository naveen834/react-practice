import React, { useEffect, useState } from 'react';

export function Currenttime() {
  const [tick, setTick] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(
      () => setTick(new Date().toLocaleTimeString()),
      1000
    );
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <strong>{tick}</strong>;
}
