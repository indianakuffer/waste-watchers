import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../../App.css";

const NavBar = styled.nav`
  background-color: #dadada;
  width: 100%;
  height: 90px;
  text-decoration: none;
  font-family: Nunito;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ;
`;

const Links = styled(NavLink)`
  align-items: center;
  text-decoration: none;
  font-family: Nunito;
  color: #000000;
  // background-color: red;
  font-size: 17px;
  height: 23px;
  width: 110px;
  margin: 10px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px;
`;

const LogoContainer = styled.div``;

const AccountButton = styled.button`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  border-style: none;
`;

export default function Nav() {
  return (
    <NavBar>
      <LogoContainer>
        <NavLink classname="logo" to="/">
          Waste Wasters
        </NavLink>
      </LogoContainer>
      <LinksContainer>
        <Links className="log-recycling" to="/log">
          Log Recycling
        </Links>
        <Links className="link" to="/progress">
          My Progress
        </Links>
        <Links className="link" to="/about">
          About Us
        </Links>
        <AccountButton></AccountButton>
      </LinksContainer>
    </NavBar>
  );
}
