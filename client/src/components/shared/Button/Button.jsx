import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledButton = styled.button`
  background: ${props => props.color ? props.color : 'grey'};
  height: 45px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  color: white;
  font-family: 'Nunito', arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

export default function Button(props) {
  return (
    <>
      {props.buttonLink ?
        <StyledLink to={props.buttonLink}>
          <StyledButton color={props.color}>{props.buttonText}</StyledButton>
        </StyledLink>
        :
        <StyledButton color={props.color}>{props.buttonText}</StyledButton>
      }

    </>
  )
}
