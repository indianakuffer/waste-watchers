import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import Jumbotron from "../../components/shared/Jumbotron/Jumbotron";
import styled from "styled-components";
import { getUser } from "../../services/users";

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
  width: 60%;
  height: 65px;
  border-radius: 100px;
  border: 5px solid black;
  margin-top: 60px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const ProgressBarColor = styled.div`
  background-color: #31c96e;
  width: ${(props) => props.progressPercent + "%"};
  transition: width 4s ease;
  height: 55px;
  border-radius: inherit;
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
  background-color: #ffff;
  position: absolute;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  // z-index: 1;
`;

const PieSegment1 = styled.div`
  background: #ff7373;
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  transform: translate(0, 100%) rotate(90deg);
  transform-origin: 50% 0;
`;

const PieSegment2 = styled.div`
  background: #ffbb0d;
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  transform: translate(0, 100%) rotate(-90deg);
  transform-origin: 50% 0;
`;

const PieSegment3 = styled.div`
  background: #ffdd87;
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  transform: translate(0, 100%) rotate(90deg) rotate(60deg);
  transform-origin: 40% 0;
`;

const PieSegment4 = styled.div`
  background: #31c96e;
`;

const PieSegment5 = styled.div`
  background: #0085ff;
`;

const PieSegment6 = styled.div`
  background: #b79eff;
`;

export default function Progress(props) {
  let [userData, setUserData] = useState(null);
  let [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const helper = async () => {
      const response = await getUser(props.loggedIn);
      setUserData(response);
      setProgressPercent(response.points % 100);
    };
    helper();
  }, []);

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
          <ProgressBarColor progressPercent={progressPercent} />
        </ProgressBar>
        <ProgressText>
          Only <span>{userData && 100 - (userData.points % 100)} points</span>{" "}
          until your next tree!
        </ProgressText>
        <TreeImage src="https://i.imgur.com/ztj0HxG.png" />
        <ProgressText>
          You've planted{" "}
          <span>{userData && Math.floor(userData.points / 100)} trees</span> so
          far!
        </ProgressText>
        <ProgressHeading>Recyclables Breakdown</ProgressHeading>
        <HeadingUnderline />
        <PieChart>
          <ChartCenter />
          <PieSegment1 />
          <PieSegment2 />
          <PieSegment3 />
        </PieChart>
        <BottomSquiggle src="https://i.imgur.com/zP7qZyg.png" />
      </ProgressContainer>
    </Layout>
  );
}
