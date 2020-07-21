import React, { useEffect, useState } from "react";
import { getUser } from "../../services/users";
import styled from "styled-components";
import Layout from "../../components/shared/Layout/Layout";
import Jumbotron from "../../components/shared/Jumbotron/Jumbotron";
import Chart from '../../components/Chart/Chart'
import Legend from '../../components/Legend/Legend'

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
const Breakdown = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90vw;
`

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
        <Breakdown >
          <Legend />
          {userData && <Chart data={Object.values(userData.itemCategories)} />}
        </Breakdown>
        <BottomSquiggle src="https://i.imgur.com/zP7qZyg.png" />
      </ProgressContainer>
    </Layout>
  );
}
