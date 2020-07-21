import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

const PopUpContainer = styled.div`
  display: flex;
  position: fixed;
  top: 20vh;
  flex-flow: column;
  align-items: center;
  align-self: center;
  max-width: 800px;
  padding: 70px;
  z-index: 20;
  background-color: ${props => props.color ? props.color + 'BF' : 'white'};
  color: white;
  font-size: 40px;
  text-align: center;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  .big-text {
    font-weight: bold;
  }
  .small-text {
    margin-bottom: 40px;
  }
  a {
    max-width: 150px;
  }
  .btn {
    max-width: 150px;
  }
`

export default function PopUp(props) {
  return (
    <PopUpContainer color={props.color}>
      <div className='big-text'>{props.bigText}</div>
      <div className='small-text'>{props.smallText}</div>
      <Button
        onClick={props.onClick}
        buttonLink={props.buttonLink}
        buttonText={props.buttonText}
        color={props.buttonColor || props.color}
      />
    </PopUpContainer>
  )
}
