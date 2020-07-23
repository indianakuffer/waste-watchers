import React from 'react'
import * as d3 from 'd3'

export default function Slice(props) {
  let { pie } = props
  let arc = d3.arc().innerRadius(props.size * .22).outerRadius(props.size / 2)
  let colors = ['#0085ff', '#ffbb0d', '#ff7373', '#b79eff', '#31c96e', '#ffdd87']

  //--------- Render ---------//
  return (
    <>
      {pie.map((slice, index) => {
        return <path key={index} d={arc(slice)} fill={colors[index]} />
      })}
    </>
  )
}
