import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import styled from 'styled-components'

const TextContainer = styled.div`
display: flex;
  width: 1123px;
  height: 545px;
  position: relative; 
  left: 22px;
  top: 99px;
  font-family: Nunito;
  font-size: 60px;
  font-weight: bold;
  color: #000000;
`
const AboutTitle = styled.div`
  font-family: Nunito;
  font-size: 40px;
  text-align: center;
  align-items: center;
  font-weight: bold;
  color: #000000;
`
const TextBorder = styled.div`
{
  position: relative;
   left: 18px; 
   top: 18px;
  float: right
  width: 50px;
  height: 5px;
  background-color: #000000;
}
`
const AlignAll = styled.div`
{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center
}
}
`

export default function About(props) {
  return (
    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>

      <AlignAll>
        <AboutTitle>
          Who We Are
        </AboutTitle>
        <br></br>
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
