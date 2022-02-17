import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div>Logo</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dummy">Dummy</Link>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 6em;
  justify-content: space-between;
  left: 0;
  padding: 2em 4em;
  position: absolute;
  right: 0;
  top: 0;
`;
