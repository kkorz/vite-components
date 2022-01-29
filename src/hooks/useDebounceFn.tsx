import { useRef, useEffect } from "react";

type FnType = () => any;

interface Icurrent {
  timer: number;
  fn: FnType;
}

export const useDebounceFn = (fn: FnType, delay: number) => {
  const { current }: { current: Icurrent } = useRef({ fn, timer: 0 });

  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  const run = () => {
    if (current.timer) {
      window.clearTimeout(current.timer);
    }
    current.timer = window.setTimeout(() => {
      current.fn();
    }, delay);
  };

  const cancel = () => {
    window.clearTimeout(current.timer);
  };

  return { run, cancel };
};
