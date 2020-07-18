import React, { useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Input from '../../components/shared/Input/Input'
import styled from 'styled-components'
import Button from '../../components/shared/Button/Button'
import { Link, Redirect } from 'react-router-dom'
import { getUsers } from '../../services/users'
import envelopeImage from '../../images/input-icons/envelope.svg'
import lockImage from '../../images/input-icons/lock.svg'

const ScreenContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .squiggle {
    position: absolute;
    width: 100%;
    height: 50%;
    z-index: -10;
    background: url('https://i.imgur.com/2d7CEc0.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
`
const FormContainer = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  .input-container {
    margin-bottom: 10px;
  }
`
const TopImage = styled.div`
  top: 0;
`
const BottomImage = styled.div`
  bottom: 0;
  transform: scaleY(-1) scaleX(-1);
`
const Prompt = styled.div`
  display: flex;

`

export default function SignIn(props) {
  let [inputs, setInputs] = useState({ email: '', password: '' })
  let [submitted, setSubmitted] = useState(false)

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
    const response = await getUsers()
    const search = response.find(user => (user.accountInfo.email === inputs.email && user.accountInfo.password === inputs.password))
    if (search) {
      props.setLoggedIn(search._id)
      setSubmitted(true)
    } else {
      alert('No user found., try again!')
    }
  }

  if (submitted) return <Redirect to='/' />

  return (
    <Layout loggedIn={props.loggedIn}>
      <ScreenContainer>
        <TopImage className='squiggle' />
        <h1>Welcome Back!</h1>
        <FormContainer>
          <Input
            placeholder='email'
            name='email'
            onChange={handleChange}
            value={inputs.email}
            image={envelopeImage}
          />
          <Input
            placeholder='password'
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
            buttonLink='/signin'
            onClick={handleSubmit}
          />
        </FormContainer>
        <Prompt>
          <div>Don't have an account?</div>
          <Link to='signup'>Sign Up!</Link>
        </Prompt>
        <BottomImage className='squiggle' />
      </ScreenContainer>
    </Layout>
  )
}
