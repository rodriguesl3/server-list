import { useEffect, useState } from "react";

export function useDebounce(term: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(term);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, term]);

  return debounceValue;
}
