import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 110px;
  height: 110px;
`

export default function Item(props) {
  return (
    <ItemContainer>
      <img src={props.image} />
      {props.name}
    </ItemContainer>
  )
}