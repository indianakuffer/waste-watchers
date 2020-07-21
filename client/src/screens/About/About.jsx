import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import styled from "styled-components";
import Jumbotron from "../../components/shared/Jumbotron/Jumbotron";

const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
const AboutHeading = styled.div`
  margin-top: 60px;
  font-size: 60px;
  text-align: center;
  align-items: center;
  font-weight: bold;
`
const HeadingUnderline = styled.div`
  text-align: center;
  width: 150px;
  height: 5px;
  background-color: #000000;
  margin-top: 20px;
  border-radius: 5px;
`
const AboutText = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 70px;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 150px;
  max-width: 1200px;
`
const BlueSquiggle = styled.img`
  width: 100%;
  z-index: -10;
`
const GreenSquiggle = styled.img`
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
      <AboutContainer>
        <AboutHeading>Who We Are</AboutHeading>
        <HeadingUnderline />
        <AboutText>
          Waste Watchers is a global recycling collective dedicated to
          empowering humans everywhere to actively engage in recycling.
        </AboutText>
        <BlueSquiggle src="https://i.imgur.com/waL4ZJN.png" />
        <AboutHeading>What We Do</AboutHeading>
        <HeadingUnderline />
        <AboutText>
          We empower our members through providing personalized analytics and
          tree planting incentives based on identified recycling habits.
        </AboutText>
        <GreenSquiggle src="https://i.imgur.com/Xq3HU2x.png" />
        <AboutHeading>Why We Do What We Do</AboutHeading>
        <HeadingUnderline />
        <AboutText>
          Life is hard enough already, recycling shouldn't be. We're here to
          change that and to keep our planet healthy, happy, and green.
        </AboutText>
      </AboutContainer>
    </Layout>
  );
}
