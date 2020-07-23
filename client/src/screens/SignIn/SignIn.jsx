import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { getUsers } from '../../services/users'
import styled from 'styled-components'
import Layout from '../../components/shared/Layout/Layout'
import Input from '../../components/shared/Input/Input'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'
import PopUp from '../../components/shared/PopUp/PopUp'
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
const Prompt = styled.div`
  display: flex;
  color: #838383;
  font-size: 17px;
  margin-top: 30px;
  font-weight: bold;
  a {
    margin-left: 20px;
  }
`

export default function SignIn(props) {
  //--------- States ---------//
  let [inputs, setInputs] = useState({ email: '', password: '' })
  let [submitted, setSubmitted] = useState(false)
  let [alert, setAlert] = useState(false)
  let [loading, setLoading] = useState(false)

  //--------- Functions ---------//
  const handleChange = e => {
    let value = e.target.value
    let name = e.target.name
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const response = await getUsers()
    setLoading(false)
    const search = response.find(user => (user.accountInfo.email === inputs.email && user.accountInfo.password === inputs.password))
    if (search) {
      props.setLoggedIn(search._id)
      setSubmitted(true)
    } else {
      setAlert(true)
    }
  }

  //--------- Redirects ---------//
  if (submitted) return <Redirect to='/' />

  //--------- Render ---------//
  return (
    <Layout waves={true} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <MobileWave image='images/mobile-waves/signin-top.svg' />
      <Card>
        <h1>Welcome Back!</h1>
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
          <a href='#'>Forgot password?</a>
          <Button
            color='#31C96E'
            buttonText='Sign In'
            onClick={handleSubmit}
          />
        </FormContainer>
        <Prompt>
          <div>Don't have an account?</div>
          <Link to='signup'>Sign Up!</Link>
        </Prompt>
      </Card>
      <MobileWave image='images/mobile-waves/signin-bottom.svg' />
      {alert &&
        <PopUp
          color='#df6565'
          bigText='No user found.'
          smallText='Please try again!'
          buttonText='Okay'
          onClick={() => { setAlert(false) }}
        />
      }
      {loading && <Loader />}
    </Layout>
  )
}
