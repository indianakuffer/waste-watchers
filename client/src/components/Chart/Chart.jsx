import React from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'
import Slice from '../Slice/Slice'

const ChartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MiddleCircle = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  z-index: 10;
  height: 120px;
  width: 120px;
`

export default function Chart(props) {
  const height = 300, width = 300
  let pie = d3.pie()(props.data)

  return (
    <ChartContainer>
      <svg height={height} width={width}>
        <g transform={`translate(${width / 2},${height / 2})`}>
          <Slice pie={pie} />
        </g>
      </svg>
      <MiddleCircle>&nbsp;</MiddleCircle>
    </ChartContainer>
  )
}
