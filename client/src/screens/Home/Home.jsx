import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Jumbotron from '../../components/shared/Jumbotron/Jumbotron'
import styled from 'styled-components'

const HomeContainer = styled.div`
  width: 100%;
  >* {
    margin-bottom: 150px;
  }
  @media only screen and (max-width: 768px) {
    >* {
      margin-bottom: 100px;
    }
  }
`

export default function Home(props) {
  return (
    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <HomeContainer>
        <Jumbotron
          imageUrl='https://i.imgur.com/aat01sL.png'
          color='#ffce51'
          bigText='Waste Watchers is a global recycling collective.'
          smallText='Learn more about what we do and the values driving our organization'
          buttonText='About Waste Watchers'
          buttonLink='/about'
        />
        <Jumbotron
          imageUrl='https://i.imgur.com/o7mzJEe.png'
          color='#31c96e'
          bigText='A green Earth is a happy Earth, and a happy Earth makes for happy people.'
          smallText='Join us and turn your recyclables into trees!'
          buttonText='Get Started!'
          buttonLink='/signup'
        />
        <Jumbotron
          imageUrl='https://i.imgur.com/f1ytCY7.png'
          color='#235ae5'
          bigText='The first step to your recycling journey starts here.'
          smallText='All the recycling resources you need'
          buttonText='Join Us!'
          buttonLink='/signup'
        />
        <Jumbotron
          imageUrl='https://i.imgur.com/b2PQ8oB.png'
          color='#ff7373'
          quote='-Brian A., NYC'
          bigText={`"I feel bad for not participating in something so well designed."`}
          smallText='Take a virtual tour of the Sims Municipal Recycling Center'
          buttonText='Start Now'
          buttonLink='/signup'
        />
      </HomeContainer>
    </Layout>
  )
}
