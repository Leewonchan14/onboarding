import useThrottle from '@/hooks/useThrottle';
import {
  DependencyList,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function useThrottleCallback<T extends Function>(
  callback: T,
  limit: number,
  deps: DependencyList,
): T {
  const [active, setActive] = useState(0);
  const throttledActive = useThrottle(active, limit);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const argsRef = useRef<any>(null);
  const func = useCallback(callback, [callback, deps]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const throttledFunc = (...args: any[]) => {
    argsRef.current = args;
    setActive((prev) => prev + 1);
  };

  useEffect(() => {
    if (throttledActive === 0) return;
    func(...argsRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [throttledActive]);

  return throttledFunc as unknown as T;
}

export default useThrottleCallback;
