import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  //css here
`

export default function Input(props) {
  return (
    <StyledInput placeholder={props.placeholder}></StyledInput>
  )
}
