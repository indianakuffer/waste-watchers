import React from "react"
import styled from "styled-components"

const ButtonContainer = styled.div`
  background: #dadada;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  z-index: 100;
  width: 180px;
  position: absolute;
  padding: 20px;
  padding-top: 40px;
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
const InvisibleClose = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(1px);
  z-index: 99;
`

export default function NavMenu(props) {
  return (
    <>
      <ButtonContainer className={props.className}>
        <CloseX className='x' onClick={props.closeFunction} />
        {props.children}
      </ButtonContainer>
      <InvisibleClose onClick={props.closeFunction} />
    </>
  )
}
