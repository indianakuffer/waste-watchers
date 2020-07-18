import React, { useState } from "react";
import Button from "../shared/Button/Button";
import styled from "styled-components";
import { Redirect } from 'react-router-dom'

const ButtonContainer = styled.div`
  background: #dadada;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  z-index: 100;
  height: 180px;
  width: 180px;
  position: absolute;
  padding: 20px;
  top: 0px;
  right: 0px;

  button {
    margin: 10px 0px;
  }
  .x {
    margin: 0;
  } 
`
const CloseX = styled.button`
  position: absolute;
  top: 9px;
  right: 9px;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: none;
  background-image: url('${require('../../images/nav-menu/x.png')}');
  background-repeat: no-repeat;
  background-position: center;
`

export default function NavMenu(props) {
  let [signedOut, setSignedOut] = useState(false)

  const signOut = () => {
    props.setLoggedIn(null)
    setSignedOut(true)
  }

  if (signedOut) return <Redirect to='/' />

  return (
    <ButtonContainer>
      <CloseX className='x' onClick={props.toggleNavMenu} />
      {props.loggedIn && <>
        <Button
          color="#5A83EC"
          buttonText="Manage My Account"
          buttonLink={`/account/${props.loggedIn}`}
          fontSize='15px'
        />
        <Button
          color="#FF7373"
          buttonText="Sign Out"
          onClick={signOut}
          fontSize='15px'
        />
      </>
      }
      {!props.loggedIn && <>
        <Button
          color="#31C96E"
          buttonText="Sign In"
          buttonLink="/signin"
          fontSize='15px'
        />
        <Button
          color="#5A83EC"
          buttonText="Create an Account"
          buttonLink="/signup"
          fontSize='15px'
        />
      </>
      }
    </ButtonContainer>
  );
}
