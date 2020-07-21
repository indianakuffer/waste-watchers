import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { getUser, updateUser } from '../../services/users'
import styled from 'styled-components'
import Layout from '../../components/shared/Layout/Layout'
import Card from '../../components/shared/Card/Card'
import Input from '../../components/shared/Input/Input'
import ProfilePicCircle from '../../components/shared/ProfilePicCircle/ProfilePicCircle'
import Button from '../../components/shared/Button/Button'
import PopUp from '../../components/shared/PopUp/PopUp'
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
  button {
    margin-top: 50px;
  }
`
const TopImage = styled.div`
  top: 0;
`
const BottomImage = styled.div`
  bottom: 0;
  transform: scaleY(-1) scaleX(-1);
`

export default function EditAccount(props) {
  let [inputs, setInputs] = useState({ username: '', email: '', password: '', profileImg: '' })
  let [confirm, setConfirm] = useState('')
  let [saved, setSaved] = useState(false)
  let [alert, setAlert] = useState(false)

  useEffect(() => {
    const helper = async () => {
      const response = await getUser(props.loggedIn)
      setInputs({ ...inputs, ...response.accountInfo })
      setConfirm(response.accountInfo.password)
    }
    helper()
  }, [])

  const handleChange = e => {
    let value = e.target.value
    let name = e.target.name
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (inputs.password !== confirm) {
      setAlert(true)
      return
    }
    let response
    const { password, ...rest } = inputs
    if (password) {
      response = await updateUser(props.loggedIn, { accountInfo: inputs })
    } else {
      response = await updateUser(props.loggedIn, { accountInfo: rest })
    }
    setSaved(true)
  }

  if (saved) return <Redirect to={`/account/${props.loggedIn}`} />

  return (
    <Layout waves={true} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <Card>
        <h1>Edit Your Account</h1>
        <ProfilePicCircle profileImg={inputs.profileImg} />
        <FormContainer>
          <Input
            placeholder='Username'
            name='username'
            onChange={handleChange}
            value={inputs.username}
            image={envelopeImage}
          />
          <Input
            placeholder='Profile Pic'
            name='profileImg'
            onChange={handleChange}
            value={inputs.profileImg}
            image={envelopeImage}
          />
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
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}
            type='password'
            image={lockImage}
          />
          <Button
            color='#31C96E'
            buttonText='Save'
            onClick={handleSubmit}
          />
        </FormContainer>
      </Card>
      {alert &&
        <PopUp
          color='#df6565'
          smallText='Please make sure passwords match.'
          buttonText='Okay'
          onClick={() => { setAlert(false) }}
        />
      }
    </Layout>
  )
}
