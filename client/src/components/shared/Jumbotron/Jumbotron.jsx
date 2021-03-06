import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const JumboContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-height: 800px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  * {
    box-sizing: border-box;
  }
  @media only screen and (max-width: 768px) {
    min-height: 500px;
  }
`
const TextBox = styled.div`
  display: flex;
  flex-flow: column; 
  justify-content: center;
  align-items: center;
  font-family: 'Nunito', arial, sans-serif;
  padding: 100px 0px;
  color: white;
  text-align: center;
  background-color: ${props => props.color ? props.color + 'BF' : 'white'};
  width: 83%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 50px 0;
  }
`
const BigText = styled.div`
  font-weight: bold;
  font-size: 40px;
  width: 90%;
  max-width: 900px;
  margin-bottom: ${props => props.quote ? '10px' : '20px'};
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`
const Quoted = styled.div`
  font-size: 25px;
  margin-bottom: 45px;
`
const SmallText = styled.div`
  font-style: italic;
  font-size: 30px;
  max-width: 470px;
  margin-bottom: 45px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`
const JumboButton = styled.button`
  color: white;
  background: #aeaeae;
  border-radius: 5px;
  border: none;
  width: 236px;
  height: 72px;
  font-size: 17px;
  font-weight: bold;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  transition: filter 0.2s ease-out;

  &:hover {
    filter: brightness(95%);
  }
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`

export default function Jumbotron(props) {
  return (
    <JumboContainer imageUrl={props.imageUrl}>
      <TextBox color={props.color}>
        <BigText quote={props.quote}>{props.bigText}</BigText>
        {props.quote && <Quoted>{props.quote}</Quoted>}
        <SmallText>{props.smallText}</SmallText>
        {props.buttonText &&
          <Link to={props.buttonLink}>
            <JumboButton>{props.buttonText}</JumboButton>
          </Link>
        }
      </TextBox>
    </JumboContainer>
  )
}
