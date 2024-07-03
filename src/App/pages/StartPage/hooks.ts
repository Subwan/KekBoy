import { useLayoutEffect, useState } from 'react';

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(window.screen.width);
  
  useLayoutEffect(() => {
    const onResize = () => {
      setWindowWidth(window.screen.width);
    };

    window.addEventListener('resize', onResize);
  }, []);

  return windowWidth;
};
