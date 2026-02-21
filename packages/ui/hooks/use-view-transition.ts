import { useCallback } from "react";

export const useViewTransition = () => {
  const startTransition = useCallback((updateFn: () => void) => {
    if ("startViewTransition" in document) {
      document.startViewTransition(updateFn);
    } else {
      updateFn();
    }
  }, []);

  return { startTransition };
};
