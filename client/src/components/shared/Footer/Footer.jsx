import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: #dadada;
  height: 261px;
  padding-top: 40px;
`
const FooterCategory = styled.div`
  display: flex;
  flex-flow: column;
  .title {
    font-size: 22px;
    font-weight: bold;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 17px;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Logo = styled.div`
`

export default function Footer() {
  return (
    <FooterContainer>
      <Logo>
        <img />
      </Logo>
      <FooterCategory>
        <div className='title'>Connect with Us</div>
        <a href='#' target='_blank' rel='noopener noreferrer'><img /></a>
        <a href='#' target='_blank' rel='noopener noreferrer'><img /></a>
        <a href='#' target='_blank' rel='noopener noreferrer'><img /></a>
        <a href='#' target='_blank' rel='noopener noreferrer'><img /></a>
      </FooterCategory>
      <FooterCategory>
        <div className='title'>Support</div>
        <Link to="/">Help Center</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Cookies</Link>
        <Link to="/">Privacy & Terms</Link>
        <Link to="/">Sitemap</Link>
      </FooterCategory>
      <FooterCategory>
        <div className='title'>Company</div>
        <Link to="/">About Us</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Press</Link>
        <Link to="/">Investor Relations</Link>
      </FooterCategory>
    </FooterContainer>
  )
}
