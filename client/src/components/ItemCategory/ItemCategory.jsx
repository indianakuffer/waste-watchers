import React from 'react'
import Item from '../../components/Item/Item'
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
`

export default function ItemCategory(props) {
  return (
    <CategoryContainer>
      <Title>{props.name[0].toUpperCase() + props.name.slice(1)}</Title>
      <ItemContainer>
        {props.contents && Object.keys(props.contents).map(item => {
          return <Item key={props.name + item} name={item} image={props.contents[item]} category={props.name} changeItem={props.changeItem} />
        })}
      </ItemContainer>
    </CategoryContainer>
  )
}