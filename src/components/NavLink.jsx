import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function NavLinkComponent({ to, children, from }) {
  return (
    <StyledLink to={to} state={{ from }}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 50px;
  font-weight: 600;
  text-transform: uppercase;
  background-image: linear-gradient(225deg,
  #231557 0%,
  #44107a 29%,
  #ff1361 67%,
  #fff800 100%);
  background-size: 200% auto;
  color: #fff;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textClip 5s linear infinite;
  display: inline-block;
  font-size: 20px;
  padding: 5px 10px;

  &.active {
    border: 1px solid darkorchid;
    border-radius: 20px;
  }
`;
