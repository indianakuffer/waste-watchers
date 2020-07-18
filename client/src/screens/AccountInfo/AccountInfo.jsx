import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { Link } from 'react-router-dom'

export default function AccountInfo(props) {
  return (
    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <Link to={`/account/${props.loggedIn}/delete`}>Temp Delete</Link>
    </Layout>
  )
}
