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
  color: ${props => props.navButton ? 'black' : 'white'};
  font-family: 'Nunito', arial, sans-serif;
  font-size: ${props => props.fontSize ? props.fontSize : '24px'};
  font-weight: bold;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  transition: filter 0.2s ease-out;

  &:hover {
    filter: saturate(50%);
  }
`
const ButtonContent = styled.div`
  display: ${props => props.image ? 'flex' : 'block'};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .button-text {
    ${props => props.image ? 'margin-left: 20px;' : null}
    @media only screen and (max-width: 768px) {
      // margin-left: 0px;
    }
  }
`

export default function Button(props) {
  return (
    <>
      {props.buttonLink ?
        <StyledLink to={props.buttonLink}>
          <StyledButton color={props.color} fontSize={props.fontSize} navButton={props.navButton} className={props.className || 'btn'} onClick={props.onClick}>
            <ButtonContent className='contents' image={props.image}>
              <div className='button-text'>{props.buttonText}</div>
              {props.image && <img src={require(`../../../${props.image}`)} alt='icon' />}
            </ButtonContent>
          </StyledButton>
        </StyledLink>
        :
        <StyledButton color={props.color} fontSize={props.fontSize} navButton={props.navButton} className={props.className || 'btn'} onClick={props.onClick}>
          <ButtonContent className='contents' image={props.image}>
            <div className='button-text'>{props.buttonText}</div>
            {props.image && <img src={require(`../../../${props.image}`)} alt='icon' />}
          </ButtonContent>
        </StyledButton>
      }
    </>
  )
}
