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
const Text = styled.div`
  font-size: 30px;
`
const Circle = styled.div`
  background-color: ${props => props.color};
  height: 48px;
  width: 48px;
  border-radius: 50%;
  margin-right: 17px;
`

export default function Legend() {
  const keys = {
    Metal: '#0085ff',
    Glass: '#ffbb0d',
    Plastic: '#ff7373',
    Cartons: '#b79eff',
    Paper: '#31c96e',
    Cardboard: '#ffdd87'
  }

  return (
    <LegendContainer>
      {Object.keys(keys).map(key => {
        return <Key>
          <Circle color={keys[key]} />
          <Text>{key}</Text>
        </Key>
      })}
    </LegendContainer>
  )
}
