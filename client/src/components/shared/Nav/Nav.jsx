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
  padding: 0px 100px;
`;

const Links = styled(NavLink)`
  align-items: center;
  text-decoration: none;
  font-family: Nunito;
  color: #000000;
  font-size: 15px;
  height: 23px;
  margin: 10px;
  text-align: center;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-evenly;
  // margin: 30px;
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  font-size: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AccountButton = styled.button`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  border-style: none;
  background-image: url("https://i.imgur.com/SUHhp7V.png");
  background-position: center;
  margin-left: 10px;
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

const LogoImage = styled.img`
  height: 60px;
`;

export default function Nav() {
  return (
    <NavBar>
      <LogoContainer>
        <Logo classname="logo" to="/">
          <LogoImage src="https://i.imgur.com/lp2jwK3.png" />
          <Waste>Waste</Waste> <Watchers>Watchers</Watchers>
        </Logo>
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
        <AccountButton>
          {/* <ButtonIcon src="https://i.imgur.com/SUHhp7V.png" /> */}
        </AccountButton>
      </LinksContainer>
    </NavBar>
  );
}
