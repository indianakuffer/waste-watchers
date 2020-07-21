import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;
const LogoNav = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 20px;
`;
const LogoImage = styled.img`
  height: 60px;
`;
const Waste = styled.span`
  font-weight: 700;
`;
const Watchers = styled.span`
  font-weight: 200;
  position: relative;
  top: 18px;
  right: 25px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <LogoNav to="/">
        <LogoImage src="https://i.imgur.com/lp2jwK3.png" />
        <Waste>Waste</Waste> <Watchers>Watchers</Watchers>
      </LogoNav>
    </LogoContainer>
  )
}

