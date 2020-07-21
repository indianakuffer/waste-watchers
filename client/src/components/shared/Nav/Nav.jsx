import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavMenu from "../../NavMenu/NavMenu";
import Logo from "../Logo"
import { getUser } from '../../../services/users'

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
  background-size: cover;
  margin-left: 10px;
`;

export default function Nav(props) {
  let [showNav, setShowNav] = useState(false)
  let [profileImg, setProfileImg] = useState(null)
  const toggleNavMenu = () => {
    setShowNav(!showNav)
  }

  useEffect(() => {
    const helper = async (id) => {
      const response = await getUser(id)
      setProfileImg(response.accountInfo.profileImg)
    }
    if (props.loggedIn) helper(props.loggedIn)
  }, [props.loggedIn])

  return (
    <NavBar>
      <Logo />
      <LinksContainer>
        {props.loggedIn ?
          <>
            <Links to="/log">Log Recycling</Links>
            <Links to="/progress">My Progress</Links>
          </>
          :
          <>
            <Links to="/signin">Log Recycling</Links>
            <Links to="/signin">My Progress</Links>
          </>
        }

        <Links to="/about">About Us</Links>
        <AccountButton profileImg={profileImg} onClick={toggleNavMenu} />
      </LinksContainer>
      {showNav && <NavMenu loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} toggleNavMenu={toggleNavMenu} />}
    </NavBar>
  );
}
