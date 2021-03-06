import React from 'react'
import styled from 'styled-components'

const TextBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  padding: 0 50px;
  @media only screen and (max-width: 768px) {
    padding: 0px;
  }
`
const Heading = styled.div`
  margin-top: 60px;
  font-size: 55px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 35px;
  }
`
const Underline = styled.div`
  width: 150px;
  height: 5px;
  background-color: #000000;
  margin-top: 20px;
  border-radius: 5px;
`
const Text = styled.p`
  font-size: 65px;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 150px;
  max-width: 1200px;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`

export default function AboutTextBox(props) {
  return (
    <TextBox>
      <Heading>{props.heading}</Heading>
      <Underline />
      <Text>{props.content}</Text>
    </TextBox>
  )
}
