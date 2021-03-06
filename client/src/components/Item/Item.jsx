import React, { useState } from 'react'
import styled from 'styled-components'
import plusSign from '../../images/logger-icons/plus.svg'
import trashSign from '../../images/logger-icons/trash.svg'

const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 15px;
`
const Image = styled.img`
  width: 110px;
  height: 110px;
  border: 1px solid black;
  border-radius: 15px;
  object-fit: scale-down;
`
const Plus = styled.button`
  position: absolute;
  right: 3px;
  top: 3px;
  z-index: 10;
  background-image: url(${plusSign});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  height: 25px;
  width: 25px;
`
const CountContainer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255,255,255,0.8);
  width: 99%;
  height: 30px;
  padding: 2px;
  border-radius: 15px 15px 0 0;
  .count {
    font-weight: bold;
  }
  .buffer {
    width: 25px;
  }
  ${Plus} {
    position: static;
  }
`
const Trash = styled.button`
  background-image: url(${trashSign});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  height: 25px;
  width: 25px;
`

export default function Item(props) {
  //--------- States ---------//
  let [count, setCount] = useState(0)

  //--------- Functions ---------//
  const handlePlus = () => {
    setCount(count + 1)
    props.changeItem(props.category, 1)
  }

  const handleDelete = () => {
    props.changeItem(props.category, -count)
    setCount(0)
  }

  //--------- Render ---------//
  return (
    <ItemContainer>
      <Image className='image' src={require(`../../${props.image}`)} />
      {count > 0 &&
        <CountContainer>
          <Trash onClick={handleDelete} />
          <div className='count'>{count}</div>
          <Plus onClick={handlePlus} />
        </CountContainer>
      }
      {count <= 0 && <Plus onClick={handlePlus} />}
      {props.name[0].toUpperCase() + props.name.slice(1)}
    </ItemContainer>
  )
}