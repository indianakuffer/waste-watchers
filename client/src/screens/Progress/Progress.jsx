import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getUser } from "../../services/users";
import styled from "styled-components";
import Layout from "../../components/shared/Layout/Layout";
import Jumbotron from "../../components/shared/Jumbotron/Jumbotron";
import Chart from '../../components/Chart/Chart'
import Legend from '../../components/Legend/Legend'
import Loader from '../../components/shared/Loader/Loader'

const ProgressHeading = styled.div`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 45px;
  }
`
const HeadingUnderline = styled.div`
  text-align: center;
  width: 150px;
  height: 5px;
  background-color: #000000;
  margin-top: 20px;
  border-radius: 5px;
`
const ProgressText = styled.p`
  font-size: 40px;
  text-align: center;
  span {
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    font-size: 25px;
    &.so-far {
      font-size: 40px;
    }
  }
`
const ProgressBar = styled.div`
  background-color: #dadada;
  width: 60%;
  height: 65px;
  border-radius: 100px;
  border: 5px solid black;
  margin-top: 60px;
  margin-bottom: 20px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`
const ProgressBarColor = styled.div`
  background-color: #31c96e;
  width: ${(props) => props.progressPercent + "%"};
  transition: width 4s ease;
  height: 55px;
  border-radius: inherit;
  border: none;
`
const TreeImage = styled.img`
  max-width: 260px;
`
const Breakdown = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90vw;
  margin: 100px 0;
  @media only screen and (max-width: 768px) {
    flex-flow: column;
    margin: 50px 0;
  }
`
const TopWave = styled.img`
  width: 100%;
`
const BottomWave = styled.img`
  width: 100%;
  transform: scaleY(-1) scaleX(-1);
`

export default function Progress(props) {
  //--------- States ---------//
  let [userData, setUserData] = useState(null)
  let [loading, setLoading] = useState(false)
  let [progressPercent, setProgressPercent] = useState(0)

  //--------- Functions ---------//
  useEffect(() => {
    window.scrollTo(0, 0)
    const helper = async () => {
      setLoading(true)
      const response = await getUser(props.loggedIn)
      setLoading(false)
      setUserData(response)
      setProgressPercent(response.points % 100)
    }
    helper()
  }, [])

  //--------- Redirects ---------//
  if (!props.loggedIn) return <Redirect to='/signin' />

  //--------- Render ---------//
  return (
    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <Jumbotron
        imageUrl="https://i.imgur.com/JgT56UU.png"
        color="#235ae5"
        bigText="Track your impact."
        smallText="See your recycling habits visualized"
      />
      <TopWave src="https://i.imgur.com/zP7qZyg.png" />
      <ProgressHeading>How Many Trees I've Planted</ProgressHeading>
      <HeadingUnderline />
      <ProgressBar>
        <ProgressBarColor progressPercent={progressPercent} />
      </ProgressBar>
      <ProgressText>Only <span>{userData && 100 - (userData.points % 100)} points</span> until your next tree!</ProgressText>
      <TreeImage src="https://i.imgur.com/ztj0HxG.png" />
      <ProgressText className='so-far'>You've planted <span>{userData && `${Math.floor(userData.points / 100)} tree${Math.floor(userData.points / 100) === 1 ? '' : 's'}`}</span> so far!</ProgressText>
      <ProgressHeading>Recyclables Breakdown</ProgressHeading>
      <HeadingUnderline />
      <Breakdown >
        <Legend />
        {userData &&
          <>
            <Chart mobile={false} size={500} data={Object.values(userData.itemCategories)} />
            <Chart mobile={true} size={300} data={Object.values(userData.itemCategories)} />
          </>
        }
      </Breakdown>
      <BottomWave src="https://i.imgur.com/zP7qZyg.png" />
      {loading && <Loader />}
    </Layout>
  )
}
