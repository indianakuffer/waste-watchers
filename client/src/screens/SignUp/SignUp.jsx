import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { getUsers, createUser } from '../../services/users'
import styled from 'styled-components'
import Layout from '../../components/shared/Layout/Layout'
import Input from '../../components/shared/Input/Input'
import Button from '../../components/shared/Button/Button'
import PopUp from '../../components/shared/PopUp/PopUp'
import Card from '../../components/shared/Card/Card'
import Loader from '../../components/shared/Loader/Loader'
import MobileWave from '../../components/shared/MobileWave/MobileWave'
import envelopeImage from '../../images/input-icons/envelope.svg'
import lockImage from '../../images/input-icons/lock.svg'

const FormContainer = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  .input-container {
    margin-bottom: 10px;
  }
  button {
    margin-top: 50px;
  }
`

export default function SignUp(props) {
  //--------- States ---------//
  let [inputs, setInputs] = useState({ email: '', password: '', confirm: '' })
  let [submitted, setSubmitted] = useState(false)
  let [alertAlreadyExists, setAlertAlreadyExists] = useState(false)
  let [alertNoMatch, setAlertNoMatch] = useState(false)
  let [loading, setLoading] = useState(false)

  //--------- Functions ---------//
  const handleChange = e => {
    let value = e.target.value
    let name = e.target.name
    setInputs({ ...inputs, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (inputs.password !== inputs.confirm) {
      setAlertNoMatch(true)
      return
    }
    setLoading(true)
    const response = await getUsers()
    setLoading(false)
    const search = response.find(user => (user.accountInfo.email === inputs.email))
    if (!search) {
      submitUser()
    } else {
      setAlertAlreadyExists(true)
    }
  }

  const submitUser = async () => {
    const response = await createUser({
      accountInfo: {
        username: inputs.email,
        email: inputs.email,
        password: inputs.password,
        profileImg: 'https://i.imgur.com/ifwYdAk.png'
      },
      points: 0,
      itemCategories: {
        metal: 0,
        glass: 0,
        plastic: 0,
        cartons: 0,
        paper: 0,
        cardboard: 0
      }
    })
    props.setLoggedIn(response._id)
    setSubmitted(true)
  }

  //--------- Redirects ---------//
  if (submitted) return <Redirect to='/' />

  //--------- Render ---------//
  return (
    <Layout waves={true} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <MobileWave image='images/mobile-waves/signup-top.svg' />
      <Card>
        <h1>Get Started!</h1>
        <FormContainer>
          <Input
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={inputs.email}
            image={envelopeImage}
          />
          <Input
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={inputs.password}
            type='password'
            image={lockImage}
          />
          <Input
            placeholder='Confirm Password'
            name='confirm'
            onChange={handleChange}
            value={inputs.confirm}
            type='password'
            image={lockImage}
          />
          <Button
            color='#31C96E'
            buttonText='Sign Up'
            onClick={handleSubmit}
          />
        </FormContainer>
      </Card>
      <MobileWave image='images/mobile-waves/signup-bottom.svg' />
      {alertNoMatch &&
        <PopUp
          color='#df6565'
          smallText='Please make sure the passwords match!'
          buttonText='Okay'
          onClick={() => { setAlertNoMatch(false) }}
        />
      }
      {alertAlreadyExists &&
        <PopUp
          color='#df6565'
          smallText='A user with that email already exists!'
          buttonText='Oh!'
          onClick={() => { setAlertAlreadyExists(false) }}
        />
      }
      {loading && <Loader />}
    </Layout>
  )
}
