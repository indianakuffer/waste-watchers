import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import Jumbotron from "../../components/shared/Jumbotron/Jumbotron";
import styled from "styled-components";

const ProgressContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const TopSquiggle = styled.img`
  width: 100%;
`;

const BottomSquiggle = styled.img`
  width: 100%;
  transform: scaleY(-1) scaleX(-1);
  bottom: 0;
  z-index: -10;
`;

const ProgressHeading = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

const HeadingUnderline = styled.div`
  text-align: center;
  width: 150px;
  height: 5px;
  background-color: #000000;
  margin-top: 20px;
  border-radius: 5px;
`;

const ProgressBar = styled.div`
background-color: #dadada;
width: 990px;
height: 65px;
border-radius: 100px;
border: 5px solid black;
margin-top: 60px;
margin-bottom: 20px;
z-index: -10;
`

const ProgressBarColor = styled.div`
background-color: #31c96e;
width: 800px;
height: 55px;
border-radius: 100px;
border: none;
z-index: 1;
`

const PlantedTree = styled.img`
width: 260px;
height: 290px;
`

const ProgressText = styled.p`
font-size: 40px;

span {
  font-weight: bold;
}
`


export default function Progress(props) {
  return (

    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <Jumbotron
        imageUrl="https://i.imgur.com/JgT56UU.png"
        color="#235ae5"
        bigText="Track your impact."
        smallText="See your recycling habits visualized"
      />
      <ProgressContainer>
        <TopSquiggle src="https://i.imgur.com/zP7qZyg.png" />
        <ProgressHeading>How Many Trees I've Planted</ProgressHeading>
        <HeadingUnderline />
        <ProgressBar>
        <ProgressBarColor />
        </ProgressBar>
        <ProgressText>Only <span>20 points</span> until your next tree!</ProgressText>
        <PlantedTree src="https://i.imgur.com/ztj0HxG.png" />
        <ProgressText>You've planted <span>138 trees</span> so far!</ProgressText>
        <ProgressHeading>Recyclables Breakdown</ProgressHeading>
        <HeadingUnderline />
        <BottomSquiggle src="https://i.imgur.com/zP7qZyg.png" />
      </ProgressContainer>
    </Layout>
  );
}
