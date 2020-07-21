import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

const PopUpContainer = styled.div`
  display: flex;
  position: fixed;
  flex-flow: column;
  align-items: center;
  color: white;
  max-width: 800px;
  align-self: center;
  z-index: 20;
  font-size: 40px;
  background-color: ${props => props.color ? props.color + 'BF' : 'white'};
  padding: 70px;
  .big-text {
    font-weight: bold;
  }
  .small-text {
    margin-bottom: 40px;
  }
  a {
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
