import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  background-color: #dadada;
  border-radius: 5px;
  width: 309px;
  height: 45px;
  display: flex;
`
const StyledInput = styled.input`
  color: #838383;
  background-color: transparent;
  border: none;
  width: 100%;
  font-family: inherit;
  font-size: 17px;
  font-weight: bold;
`
const StyledImage = styled.img`
  margin-left: 10px;
  margin-right: 20px;
`

export default function Input(props) {
  return (
    <>
      <InputContainer className='input-container'>
        <StyledImage src={props.image} />
        <StyledInput placeholder={props.placeholder} type={props.type} onChange={props.onChange} name={props.name} value={props.value} />
      </InputContainer>
    </>
  )
}
