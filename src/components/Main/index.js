import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Chart from '../Chart'


const datas = [
  [10, 40, 30, 20, 50, 10, 10, 40, 30, 20, 50, 10, 10, 40, 30, 20, 50, 10],
  [10, 30, 40, 20],
]
let i = 0;

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    changeData()
  }, [])

  const changeData = () => {
    setData(datas[i++]);
    if(i === datas.length) i = 0;
  }

  return (
    <Wrapper>
      <ChartWrapper>        
        <Chart 
          width={'100%'}
          height={400}
          data={data}
        />
        <Options>
          <div>
            <Button onClick={changeData}>Change Data</Button>
          </div>
        </Options>
      </ChartWrapper>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  padding: 2rem;
`

const ChartWrapper = styled.div`
  display: flex;  
  border: 2px solid #c62a88;
  border-radius: 5px;
`

const Options = styled.div`
  background: #f9e9f3;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
`

const Button = styled.div`
  padding: 1rem 2rem;
  height: auto;
  border: 2px solid #c62a88;
  border-radius: 5px;
  background: white;
  color: #c62a88;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: white;
    background: #c62a88;
  }
`

export default Main