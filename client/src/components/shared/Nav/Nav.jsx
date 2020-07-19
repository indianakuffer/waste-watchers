import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavMenu from "../../NavMenu/NavMenu";
// import { getUser } from '../../../services/users'

const NavBar = styled.nav`
  background-color: #dadada;
  width: 100%;
  height: 90px;
  text-decoration: none;
  font-family: "Nunito", arial, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled(NavLink)`
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
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Links = styled(NavLink)`
  align-items: center;
  text-decoration: none;
  font-family: "Nunito", arial, sans-serif;
  color: #000000;
  font-size: 15px;
  height: 23px;
  margin: 10px;
  text-align: center;
`;
const AccountButton = styled.button`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  border: none;
  background-image: url("${props => props.profileImg ? props.profileImg : 'https://i.imgur.com/SUHhp7V.png'}");
  background-position: center;
  margin-left: 10px;
`;

export default function Nav(props) {
  let [showNav, setShowNav] = useState(false)
  // let [profileImg, setProfileImg] = useState('https://i.imgur.com/lp2jwK3.png')
  const toggleNavMenu = () => {
    setShowNav(!showNav)
  }

  // useEffect(() => {
  //   const helper = async (id) => {
  //     const response = await getUser(id)
  //     setProfileImg(response.accountInfo.profileImg)
  //   }
  //   if (props.loggedIn) helper(props.loggedIn)
  // }, [props.loggedIn])

  return (
    <NavBar>
      <LogoContainer>
        <Logo to="/">
          <LogoImage src="https://i.imgur.com/lp2jwK3.png" />
          <Waste>Waste</Waste> <Watchers>Watchers</Watchers>
        </Logo>
      </LogoContainer>
      <LinksContainer>
        <Links to="/log">Log Recycling</Links>
        <Links to="/progress">My Progress</Links>
        <Links to="/about">About Us</Links>
        <AccountButton profileImg={props.profileImg} onClick={toggleNavMenu} />
      </LinksContainer>
      {showNav && <NavMenu loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} toggleNavMenu={toggleNavMenu} />}
    </NavBar>
  );
}
