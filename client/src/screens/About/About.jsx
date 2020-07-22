import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import styled from "styled-components";
import Jumbotron from "../../components/shared/Jumbotron/Jumbotron";
import AboutTextBox from '../../components/AboutTextBox/AboutTextBox'

const BlueWave = styled.img`
  width: 100%;
  z-index: -10;
`
const GreenWave = styled.img`
  width: 100%;
  z-index: -10;
`

export default function About(props) {
  return (
    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <Jumbotron
        className="jumbotron"
        imageUrl="https://i.imgur.com/aat01sL.png"
        color="#ffce51"
        bigText="We're reframing recycling."
        smallText="About Waste Watchers"
      />
      <AboutTextBox
        heading='Who We Are'
        content='Waste Watchers is a global recycling collective dedicated to
        empowering humans everywhere to actively engage in recycling.'
      />
      <BlueWave src="https://i.imgur.com/waL4ZJN.png" />
      <AboutTextBox
        heading='What We Do'
        content='We empower our members through providing personalized analytics and
        tree planting incentives based on identified recycling habits.'
      />
      <GreenWave src="https://i.imgur.com/Xq3HU2x.png" />
      <AboutTextBox
        heading='Why We Do What We Do'
        content={`Life is hard enough already, recycling shouldn't be. We're here to
        change that and to keep our planet healthy, happy, and green.`}
      />
    </Layout>
  );
}
