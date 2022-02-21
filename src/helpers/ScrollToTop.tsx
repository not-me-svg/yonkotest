import React, { PropsWithChildren } from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router";

export interface Props {
}

const ScrollToTop = (props: PropsWithChildren<Props>) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      {props.children}
    </div>
  )
};

export default ScrollToTop;