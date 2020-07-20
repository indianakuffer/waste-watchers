import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`

const StyledButton = styled.button`
  background: ${props => props.color ? props.color : 'grey'};
  height: 45px;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: white;
  font-family: 'Nunito', arial, sans-serif;
  font-size: ${props => props.fontSize ? props.fontSize : '24px'};
  font-weight: bold;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  &:hover {
    background-color:rgba(0, 0, 0, 0.1)
  }
`

export default function Button(props) {
  return (
    <>
      {props.buttonLink ?
        <StyledLink to={props.buttonLink}>
          <StyledButton color={props.color} fontSize={props.fontSize} onClick={props.onClick}>{props.buttonText}</StyledButton>
        </StyledLink>
        :
        <StyledButton color={props.color} fontSize={props.fontSize} onClick={props.onClick}>{props.buttonText}</StyledButton>
      }

    </>
  )
}
