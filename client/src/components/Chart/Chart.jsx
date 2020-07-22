import React from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'
import Slice from '../Slice/Slice'

const ChartContainer = styled.div`
  position: relative;
  display: ${props => props.mobile ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: ${props => props.mobile ? 'flex' : 'none'};
    order: -1;
    margin-bottom: 50px;
  }
`

export default function Chart(props) {
  let pie = d3.pie()(props.data)

  return (
    <ChartContainer mobile={props.mobile}>
      <svg height={props.size} width={props.size}>
        <g transform={`translate(${props.size / 2},${props.size / 2})`}>
          <Slice size={props.size} pie={pie} />
        </g>
      </svg>
    </ChartContainer>
  )
}
