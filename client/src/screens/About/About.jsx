import React from 'react'
import Layout from '../../components/shared/Layout/Layout'


const TextContainer = styled.div`
h1{
  width: 1123px;
  height: 545px;
  font-family: Nunito;
  font-size: 80px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}
`
export default function About(props) {
  return (
    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <TextContainer>
        <h1>Who We Are</h1>
        <br></br>
        <h1>Waste Watchers is a global
        recycling collective dedicated
        to empowering humans
        everywhere to actively engage
 in recycling.</h1>
      </TextContainer>
    </Layout>
  )
}
