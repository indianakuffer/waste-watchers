import React, { useState, useEffect } from "react"
import { NavLink, Redirect } from "react-router-dom"
import { getUser } from '../../../services/users'
import styled from "styled-components"
import NavMenu from "../../NavMenu/NavMenu"
import Logo from "../Logo/Logo"
import Button from "../../shared/Button/Button"

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
  @media only screen and (max-width: 768px) {
    padding: 0px 10px;
    height: 76px;
    .mobile-nav {
      right: unset;
      left: 0;
      .btn .button-text {
        color: black;
        margin-left: 0px;
      }
    }
  }
`
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Links = styled(NavLink)`
  align-items: center;
  text-decoration: none;
  color: #000000;
  font-size: 15px;
  height: 23px;
  margin: 10px;
  text-align: center;
`
const AccountButton = styled.button`
  border-radius: 50%;
  height: 44px;
  width: 44px;
  border: none;
  background-image: url("${props => props.profileImg ? props.profileImg : 'https://i.imgur.com/SUHhp7V.png'}");
  background-position: center;
  background-size: cover;
  margin-left: 10px;
`
const Hamburger = styled.button`
  display: none;
  background-image: url('${require('../../../images/nav-menu/hamburger.svg')}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`

export default function Nav(props) {
  let [showAccountMenu, setShowAccountMenu] = useState(false)
  let [showNavMenu, setShowNavMenu] = useState(false)
  let [profileImg, setProfileImg] = useState(null)
  let [signedOut, setSignedOut] = useState(false)

  useEffect(() => {
    const helper = async (id) => {
      const response = await getUser(id)
      setProfileImg(response.accountInfo.profileImg)
    }
    if (props.loggedIn) helper(props.loggedIn)
  }, [props.loggedIn])

  const signOut = () => {
    props.setLoggedIn(null)
    setSignedOut(true)
  }

  if (signedOut) return <Redirect to='/' />

  return (
    <NavBar>
      <Hamburger onClick={() => setShowNavMenu(!showNavMenu)} />
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
      </LinksContainer>
      <AccountButton profileImg={profileImg} onClick={() => setShowAccountMenu(!showAccountMenu)} />
      {showAccountMenu &&
        <NavMenu loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} closeFunction={() => setShowAccountMenu(false)}>
          {props.loggedIn &&
            <>
              <Button color="#5A83EC" buttonText="Manage My Account" buttonLink={`/account/${props.loggedIn}`} fontSize='15px' />
              <Button color="#FF7373" buttonText="Sign Out" onClick={signOut} fontSize='15px' />
            </>
          }
          {!props.loggedIn &&
            <>
              <Button color="#31C96E" buttonText="Sign In" buttonLink="/signin" fontSize='20px' />
              <Button color="#5A83EC" buttonText="Create an Account" buttonLink="/signup" fontSize='15px' />
            </>
          }
        </NavMenu>
      }
      {showNavMenu &&
        <NavMenu className='mobile-nav' loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} closeFunction={() => setShowNavMenu(false)}>
          <Button color="white" buttonText="About Us" buttonLink={`/about`} fontSize='15px' image='images/nav-menu/about-us.svg' />
          <Button color="white" buttonText="Add Recycling" buttonLink={`/log`} fontSize='14px' image='images/nav-menu/add-recycling.svg' />
          <Button color="white" buttonText="My Progress" buttonLink={`/progress`} fontSize='15px' image='images/nav-menu/my-progress.svg' />
          <Button color="white" buttonText="Map View" buttonLink={`/progress`} fontSize='15px' image='images/nav-menu/map-view.svg' />
          <Button color="white" buttonText="Language" buttonLink={`/account/${props.loggedIn}`} fontSize='15px' image='images/nav-menu/language.svg' />
          <Button color="white" buttonText="Help" buttonLink={`/about`} fontSize='15px' image='images/nav-menu/help.png' />
        </NavMenu>
      }
    </NavBar>
  );
}
