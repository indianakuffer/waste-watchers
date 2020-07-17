import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

export default function Layout(props) {
  return (
    <>
      <Nav loggedIn={props.loggedIn} />
      {props.children}
      <Footer />
    </>
  )
}