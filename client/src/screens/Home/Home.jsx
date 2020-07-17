import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Jumbotron from '../../components/shared/Jumbotron/Jumbotron'


export default function Home() {
  return (
    <Layout>
      <Jumbotron
        imageUrl='https://ibb.co/RD0Lps1'
        color='#ffce51'
        bigText='Waste Watchers is a global recycling collective.'
        smallText='Learn more about what we do and the values driving our organization.'
        buttonText='About Waste Watchers'
        buttonLink='/about'
      />
      <Jumbotron
        imageUrl='https://ibb.co/R75Pn2W'
        color='#31c96e'
        bigText='A green Earth is a happy Earth, and a happy Earth makes for happy people.'
        smallText='Join us and turn your recyclables into trees!'
        buttonText='Get Started!'
        buttonLink='/signup'
      />
      <Jumbotron
        imageUrl='https://ibb.co/ZWnP5W0'
        color='#235ae5'
        bigText='The first step of your recycling journey starts here.'
        smallText='All the recycling resources you need.'
        buttonText='Join Us!'
        buttonLink='/signup'
      />
      <Jumbotron
        imageUrl='https://ibb.co/zhSHLX3'
        color='#ff7373'
        quote='-Brian A., NYC'
        bigText={`"I feel bad for not participating in something so well designed."`}
        smallText='Take a virtual tour of the Sims Municipal Recycling Center.'
        buttonText='Start Now'
        buttonLink='/signup'
      />
    </Layout>
  )
}
