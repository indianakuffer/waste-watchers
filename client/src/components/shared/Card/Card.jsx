import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  background: white;
  border-radius: 15px;
  box-sizing: content-box;
  padding: 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 30px;
  @media only screen and (max-width: 768px) {
    padding: 0px;
    margin: 0px;
  }
`

export default function Card(props) {
  return (
    <CardContainer>
      {props.children}
    </CardContainer>
  )
}
