import { useRef } from 'react';

export default function useDebounceCallback(
  fn: (...args: unknown[]) => void,
  time: number,
) {
  const timeOutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const newFn = (...args: unknown[]) => {
    console.log('debounce');
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    timeOutRef.current = setTimeout(() => {
      fn(...args);
    }, time);
  };

  return newFn;
}
