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

export default function Progress(props) {
  return (
    <Layout loggedIn={props.loggedIn}>
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
        <BottomSquiggle src="https://i.imgur.com/zP7qZyg.png" />
      </ProgressContainer>
    </Layout>
  );
}
