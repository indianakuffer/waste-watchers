import React from 'react'
import styled from 'styled-components'

const CategoryContainer = styled.div`
  display: flex;
  flex-flow: column;
  border-top: 2px solid #dadada;
  padding: 35px 0 50px 0;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
`
const ItemContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
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