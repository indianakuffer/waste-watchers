import React from 'react'
import styled from 'styled-components'
import plusSign from '../../images/logger-icons/plus.svg'

const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 15px;
`
const Image = styled.div`
  background-image: url(${props => props.image});
  width: 110px;
  height: 110px;
  border: 1px solid black;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-position: center;
`
const Plus = styled.button`
  position: absolute;
  right: 3px;
  top: 3px;
  background-image: url(${plusSign});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  height: 25px;
  width: 25px;
`

export default function Item(props) {
  return (
    <ItemContainer>
      <Image className='image' image={props.image} />
      <Plus />
      {props.name}
    </ItemContainer>
  )
}