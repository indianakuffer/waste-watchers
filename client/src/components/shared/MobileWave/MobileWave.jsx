import React from 'react'
import styled from 'styled-components'

const Wave = styled.img`
  display: none;
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: unset;
  }
`

export default function MobileWave(props) {
  return (
    <Wave src={require(`../../../${props.image}`)} />
  )
}
