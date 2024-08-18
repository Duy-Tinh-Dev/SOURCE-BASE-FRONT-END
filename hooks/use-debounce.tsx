import { useEffect, useState } from 'react';

interface DebounceOptions {
  value: string;
  delay?: number;
}

function useDebounce({ value, delay = 500 }: DebounceOptions) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
