import { useState, useEffect } from "react";

export const useScrollHandler = () => {
  // setting initial value to true
  const [scroll, setScroll] = useState(0.2);

  // running on mount
  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");
    let scrollAmount;

    const onScroll = (container) => {
      const scrollCheck = window.scrollY < 10;
      
      if (container.scrollTop >= 10 && container.scrollTop <= 731) {
        scrollAmount = (container.scrollTop / 100) > .2 ? (container.scrollTop / 100) : .2 ;
      } else if (container.scrollTop < 10) {
        scrollAmount = .2;
      } else if (container.scrollTop > 731) {
        scrollAmount = 1;
      }
      console.log('top',container.scrollTop);
      console.log('amount',scrollAmount);
      if (scrollCheck !== scroll) {
        setScroll(scrollAmount);
      }
    };

    // setting the event handler from web API
    scrollContainer.addEventListener("scroll", (evt) => {
      onScroll(evt.target);
    });

    // cleaning up from the web API
    return () => {
      scrollContainer.removeEventListener("scroll", (evt) => {
        onScroll(evt.target);
      });
    };
  }, [scroll, setScroll]);

  return scroll;
};
