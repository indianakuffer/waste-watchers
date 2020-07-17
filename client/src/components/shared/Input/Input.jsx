import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
width: 309px;
  height: 45px;
  border-radius: 5px;
  background-color: #dadada;
  border: none;
  position: relative;
  //----- text -----// 
  font-family: Nunito;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #838383;
`
const StyledImage = styled.img`
position: absolute;
top: 5px;
`

export default function Input(props) {
  console.log(props.image)
  return (
    <>
      <StyledInput placeholder={props.placeholder} type={props.type}></StyledInput>
      <StyledImage src={props.image} />
    </>
  )
}
