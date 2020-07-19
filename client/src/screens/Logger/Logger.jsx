import React from 'react'
import Layout from '../../components/shared/Layout/Layout'

export default function Logger(props) {
  return (
    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>

    </Layout>
  )
}
