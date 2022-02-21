import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useScrollHandler } from "../hooks/useScrollHandler";
import { motion } from "framer-motion";

export const BottomContent = () => {

  const {shouldShowActions, scroll} = useScrollHandler();
  
  return (
    <motion.div 
                initial={{ 
                  opacity: 0,
                }}
                animate={{ 
                  opacity: shouldShowActions ? 0 : 1,
                }}
                transition={{ 
                  opacity: { duration: 0.2 },
                }}
      >
      <BottomContentWrapper>
        <Title>Hello Yonko!</Title>
        <Link to="/dummy">
          <button className="btn" type="button">
            Click Me!
          </button>
        </Link>
      </BottomContentWrapper>
    </motion.div>
  );
};

const BottomContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 24px 0;
`;

const Title = styled.h1`
  display: block;
`;