import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { deleteUser } from '../../services/users'
import styled from 'styled-components'
import Layout from '../../components/shared/Layout/Layout'
import Button from '../../components/shared/Button/Button'
import Card from '../../components/shared/Card/Card'
import Loader from '../../components/shared/Loader/Loader'
import MobileWave from '../../components/shared/MobileWave/MobileWave'

const ScreenDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  .btn {
    margin: 10px 0;
    max-width: 400px;
  }
  a {
    max-width: 400px;
  }
`

export default function DeleteAccount(props) {
  //--------- States ---------//
  let [deleted, setDeleted] = useState(false)
  let [loading, setLoading] = useState(false)

  //--------- Functions ---------//
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await deleteUser(props.loggedIn)
    setLoading(false)
    props.setLoggedIn(null)
    setDeleted(true)
  }

  //--------- Redirects ---------//
  if (deleted) return <Redirect to='/' />
  if (!props.loggedIn) return <Redirect to='/signin' />

  //--------- Render ---------//
  return (
    <Layout waves={true} wavesImg='https://i.imgur.com/lVYqloz.png' loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <MobileWave image='images/mobile-waves/delete-top.svg' />
      <Card>
        <ScreenDiv>
          <h1>
            Are you sure you want to delete your account? <br /> This action
            cannot be undone.
          </h1>
          <Button
            color='#5A83EC'
            buttonText='Cancel'
            buttonLink={`/account`}
          />
          <Button
            color='#FF7373'
            buttonText='Yes, Delete My Account'
            buttonLink='/'
            onClick={handleSubmit}
          />
        </ScreenDiv>
      </Card>
      <MobileWave image='images/mobile-waves/delete-bottom.svg' />
      {loading && <Loader />}
    </Layout>
  );
}
