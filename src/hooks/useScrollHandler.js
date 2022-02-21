import { useState, useEffect } from "react";

export const useScrollHandler = () => {
  // setting initial value to true
  const [scroll, setScroll] = useState(0);
  const [zoom, setZoom] = useState(5);
  const [shouldShowActions, setShouldShowActions] = useState(true);
  let scl = 5;
  let deltaY = 0;


  // running on mount
  useEffect(() => {    
    const onScroll = (deltaY) => {
      let scrollAmount = window.pageYOffset;
      let isScrollingUp = scrollAmount < scroll;
      setShouldShowActions(isScrollingUp);
      setScroll(scrollAmount);

      scl = Math.min(0, scrollAmount/3 - 60) / 10;

      setZoom(-scl);
      if (scl >= 0 && scl <= 5) {
        window.removeEventListener("scroll", ()=> {})
      }
    };

    // setting the event handler from web API
    window.addEventListener("scroll", (e) => {
      onScroll(deltaY);
    });

    // cleaning up from the web API
    return () => {
      window.removeEventListener("scroll", () => {
        onScroll();
      });
    };
  }, [scroll, setScroll]);

  return {scroll, shouldShowActions, zoom};
};
