import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from "../Logo/Logo"
import twitter from "../../../images/social-icons/twitter.png"
import facebook from "../../../images/social-icons/facebook.png"
import instagram from "../../../images/social-icons/instagram.png"
import linkedin from "../../../images/social-icons/linkedin.png"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: #dadada;
  padding: 40px 0px;
  @media only screen and (max-width: 768px) {
    flex-flow: column;
    align-items: center;
  }
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
  @media only screen and (max-width: 768px) {
    margin: 20px 0px;
  }
`
const SocialIcon = styled.img`
  height: 25px;
  margin: 0px 5px;
`

export default function Footer() {
  return (
    <FooterContainer>
      <Logo mobile={true} />
      <FooterCategory>
        <div className='title'>Connect with Us</div>
        <div>
          <a href='#' target='_blank' rel='noopener noreferrer'><SocialIcon src={twitter} /></a>
          <a href='#' target='_blank' rel='noopener noreferrer'><SocialIcon src={facebook} /></a>
          <a href='#' target='_blank' rel='noopener noreferrer'><SocialIcon src={instagram} /></a>
          <a href='#' target='_blank' rel='noopener noreferrer'><SocialIcon src={linkedin} /></a>
        </div>
      </FooterCategory>
      <FooterCategory>
        <div className='title'>Support</div>
        <Link to="/about">Help Center</Link>
        <Link to="/about">Contact Us</Link>
        <Link to="/about">Cookies</Link>
        <Link to="/about">Privacy & Terms</Link>
        <Link to="/about">Sitemap</Link>
      </FooterCategory>
      <FooterCategory>
        <div className='title'>Company</div>
        <Link to="/about">About Us</Link>
        <Link to="/about">Jobs</Link>
        <Link to="/about">Press</Link>
        <Link to="/about">Investor Relations</Link>
      </FooterCategory>
    </FooterContainer>
  )
}
