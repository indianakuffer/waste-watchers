import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Jumbotron from '../../components/shared/Jumbotron/Jumbotron'

export default function Home() {
  return (
    <Layout>
      <Jumbotron
        imageUrl='https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        color='#ffce51'
        bigText='Waste Watchers is a global recycling collective.'
        smallText='Learn more about what we do and the values driving our organization.'
        buttonText='About Waste Watchers'
        buttonLink='/about'
      />
      <Jumbotron
        imageUrl='https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
        color='#31c96e'
        bigText='A green Earth is a happy Earth, and a happy Earth makes for happy people.'
        smallText='Join us and turn your recyclables into trees!'
        buttonText='Get Started!'
        buttonLink='/signup'
      />
      <Jumbotron
        imageUrl='https://images.unsplash.com/photo-1561435375-c3e1b6fdd7d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        color='#235ae5'
        bigText='The first step of your recycling journey starts here.'
        smallText='All the recycling resources you need.'
        buttonText='Join Us!'
        buttonLink='/signup'
      />
      <Jumbotron
        imageUrl='https://images.unsplash.com/photo-1584275142335-7f7cc7ba6c23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80'
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
