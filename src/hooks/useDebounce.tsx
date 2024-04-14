import React, { useEffect, useState } from "react";

const useDebounce = (value: string, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerID);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
