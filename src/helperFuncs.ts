import { MutableRefObject, useEffect, useState } from "react";

interface Options {
  threshold: number | number[];
}

// Hook to check if the element is within the viewport/screen
// Link to the custom hook: https://usehooks.com/page/2

export function useOnScreen<T extends HTMLElement>(
  ref: MutableRefObject<T>,
  options: Options
) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const [intersectedOnce, setIntersectedOnce] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && intersectedOnce === false) {
        setIntersecting(entry.isIntersecting);
        setIntersectedOnce(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);
  return isIntersecting;
}
