import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-flow: column;
  min-height: calc(100vh - 261px - 90px);
`
const ScreenContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .wave {
    position: absolute;
    width: 100%;
    height: 50%;
    z-index: -10;
    background: url('${props => props.wavesImg || 'https://i.imgur.com/2d7CEc0.png'}');
    background-size: contain;
    background-repeat: no-repeat;
  }
  a {
    font-size: 17px;
    color: #838383;
  }
`
const TopWave = styled.div`
  top: 0;
`
const BottomWave = styled.div`
  bottom: 0;
  transform: scaleY(-1) scaleX(-1);
`

export default function Layout(props) {
  return (
    <>
      <Nav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
      <Main>
        <ScreenContainer wavesImg={props.wavesImg}>
          {props.waves && <TopWave className='wave' />}
          {props.children}
          {props.waves && <BottomWave className='wave' />}
        </ScreenContainer>
      </Main>
      <Footer />
    </>
  )
}