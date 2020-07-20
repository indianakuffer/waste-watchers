import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import styled from 'styled-components'

const TextContainer = styled.div`
display: flex;
  width: 1123px;
  height: 545px;
  text-align: center;
  align-content: center;
  font-family: Nunito;
  font-size: 60px;
  font-weight: bold;
  color: #000000;
`
const AboutTitle = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  font-family: Nunito;
  font-size: 20px;
  text-align: center;
  align-items: center;
  font-weight: bold;
  color: #000000;
`
const TextBorder = styled.div`
{
  position: absolute;
  left: 45%;
  width: 150px;
  height: 5px;
  background-color: #000000;
}
`
const AlignAll = styled.div`
{

}
`

export default function About(props) {
  return (
    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>

      <AlignAll>
        <AboutTitle>
          <h1>Who We Are</h1>
        </AboutTitle>
        <TextBorder />
        <TextContainer>
          Waste Watchers is a global
          recycling collective dedicated
          to empowering humans
          everywhere to actively engage
          in recycling.
        </TextContainer>
      </AlignAll>
    </Layout>
  )
}
