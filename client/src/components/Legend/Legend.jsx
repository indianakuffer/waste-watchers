import React from 'react'
import styled from 'styled-components'

const LegendContainer = styled.div`
  display: flex;
  flex-flow: column;
`
const Key = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
`
const Circle = styled.div`
  background-color: ${props => props.color};
  height: 48px;
  width: 48px;
  border-radius: 50%;
  margin-right: 17px;
  @media only screen and (max-width: 768px) {
    height: 35px;
    width: 35px;
    margin-right: 30px;
  }
`
const Text = styled.div`
  font-size: 30px;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export default function Legend() {
  const keys = { Metal: '#0085ff', Glass: '#ffbb0d', Plastic: '#ff7373', Cartons: '#b79eff', Paper: '#31c96e', Cardboard: '#ffdd87' }

  //--------- Render ---------//
  return (
    <LegendContainer>
      {Object.keys(keys).map(key => {
        return <Key key={key}>
          <Circle color={keys[key]} />
          <Text>{key}</Text>
        </Key>
      })}
    </LegendContainer>
  )
}
