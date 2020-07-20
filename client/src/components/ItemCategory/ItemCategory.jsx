import React from 'react'
import styled from 'styled-components'

const CategoryContainer = styled.div`
  display: flex;
  flex-flow: column;
  border-top: 2px solid #dadada;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`
const ItemContainer = styled.div`
  display: flex;
  align-items: baseline;
`

export default function ItemCategory(props) {

  return (
    <CategoryContainer>
      <Title>{props.name}</Title>
      <ItemContainer>
        {props.children}
      </ItemContainer>
    </CategoryContainer>
  )
}