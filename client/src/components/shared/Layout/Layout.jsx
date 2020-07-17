import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-flow: column;
  min-height: calc(100vh - 261px - 90px);
`

export default function Layout(props) {
  return (
    <>
      <Nav loggedIn={props.loggedIn} />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </>
  )
}