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
`;

const ProgressBarColor = styled.div`
  background-color: #31c96e;
  width: 800px;
  height: 55px;
  border-radius: 100px;
  border: none;
`;

const TreeImage = styled.img`
  max-width: 260px;
`;

const ProgressText = styled.p`
  font-size: 40px;

  span {
    font-weight: bold;
  }
`;

const PieChart = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  border-radius: 100%;
  margin: 0 auto 2rem;
  overflow: hidden;
  background-color: red;
`;
const ChartCenter = styled.div`
  background: #ffff;
  position: absolute;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

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
        <ProgressText>
          Only <span>20 points</span> until your next tree!
        </ProgressText>
        <TreeImage src="https://i.imgur.com/ztj0HxG.png" />
        <ProgressText>
          You've planted <span>138 trees</span> so far!
        </ProgressText>
        <ProgressHeading>Recyclables Breakdown</ProgressHeading>
        <HeadingUnderline />
        <PieChart>
          <ChartCenter />
        </PieChart>
        <BottomSquiggle src="https://i.imgur.com/zP7qZyg.png" />
      </ProgressContainer>
    </Layout>
  );
}
