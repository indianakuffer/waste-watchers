import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
width: 309px;
  height: 45px;
  border-radius: 5px;
  background-color: #dadada;
`

export default function Input(props) {
  return (
    <StyledInput placeholder={props.placeholder}></StyledInput>
  )
}
