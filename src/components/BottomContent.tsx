import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const BottomContent = () => {
  return (
      <BottomContentWrapper>
        <Title>Hello Yonko!</Title>
        <Link to="/dummy">
          <button className="btn" type="button">
            Click Me!
          </button>
        </Link>
      </BottomContentWrapper>
  );
};

const BottomContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Title = styled.h1`
  display: block;
`;