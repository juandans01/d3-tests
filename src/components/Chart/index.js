import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'

const draw = (ref, height, data) => {
  const svg = d3.select(ref.current);
  const svgWidth = ref.current.clientWidth
  console.log(svgWidth)

  var selection = svg.selectAll("rect").data(data);
  //scaleLinear == Barcharts
  var yScale = d3.scaleLinear()
                      .domain([0, d3.max(data)])
                      .range([0, height-100]);
  
  selection
      .transition().duration(300)
          .attr("height", (d) => yScale(d))
          .attr("y", (d) => height - yScale(d))

  selection
      .enter()
      .append("rect")
      .attr("x", (d, i) => {
        return i * ((svgWidth / data.length))
      })
      .attr("y", (d) => height)
      .attr("width", (svgWidth / data.length) - 2)
      .attr("height", 0)
      .attr("fill", "#c62a88")
      .transition().duration(300)
          .attr("height", (d) => yScale(d))
          .attr("y", (d) => height - yScale(d))
  
  selection
      .exit()
      .transition().duration(300)
          .attr("y", (d) => height)
          .attr("height", 0)
      .remove()
}


const Chart = ({width, height, data}) => {
  const ref = useRef()

  //FIRST DRAW
  useEffect(() => {
    d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)      
  }, [])

  //DRAW ON CHANGE
  useEffect(() => {
    draw(ref, height, data)
  }, [data])


  return (
    <Wrapper id='chart'>
      <svg ref={ref}></svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  height: 400px;
  border-right: 2px solid #c62a88;
  
`

export default Chart