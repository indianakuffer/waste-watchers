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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dadada;
  width: 80%;
  height: 30px;
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
  let [count, setCount] = useState(0)

  const handlePlus = () => {
    setCount(count + 1)
    props.changeItem(props.category, 1)
  }

  const handleDelete = () => {
    props.changeItem(props.category, -count)
    setCount(0)
  }

  return (
    <ItemContainer>
      <Image className='image' image={props.image} />

      {count > 0 &&
        <CountContainer>
          <Trash onClick={handleDelete} />
          <div className='count'>{count}</div>
          <Plus onClick={handlePlus} />
        </CountContainer>
      }
      {count <= 0 && <Plus onClick={handlePlus} />}

      {props.name}
    </ItemContainer>
  )
}