import React, { useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../../components/shared/Layout/Layout'
import Jumbotron from '../../components/shared/Jumbotron/Jumbotron'
import AboutTextBox from '../../components/AboutTextBox/AboutTextBox'

const Wave = styled.img`
  width: 100%;
  z-index: -10;
`

export default function About(props) {

  //--------- Functions ---------//
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //--------- Render ---------//
  return (
    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <Jumbotron
        className='jumbotron'
        imageUrl='https://i.imgur.com/TU6AYAV.jpg'
        color='#ffce51'
        bigText={`We're reframing recycling.`}
        smallText='About Waste Watchers'
      />
      <AboutTextBox
        heading='Who We Are'
        content='Waste Watchers is a global recycling collective dedicated to empowering humans everywhere to actively engage in recycling.'
      />
      <Wave src='https://i.imgur.com/waL4ZJN.png' />
      <AboutTextBox
        heading='What We Do'
        content='We empower our members through providing personalized analytics and tree planting incentives based on identified recycling habits.'
      />
      <Wave src='https://i.imgur.com/Xq3HU2x.png' />
      <AboutTextBox
        heading='Why We Do What We Do'
        content={`Life is hard enough already, recycling shouldn't be. We're here to change that and to keep our planet healthy, happy, and green.`}
      />
    </Layout>
  )
}
