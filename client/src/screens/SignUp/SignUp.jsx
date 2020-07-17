import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Input from '../../components/shared/Input/Input'

export default function SignUp(props) {
  return (
    <Layout loggedIn={props.loggedIn}>
      <Input
        placeholder=''
        image=''
      />
    </Layout>
  )
}
