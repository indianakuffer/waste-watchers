import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import twitter from "../../../images/social-icons/twitter.png"
import facebook from "../../../images/social-icons/facebook.png"
import instagram from "../../../images/social-icons/instagram.png"
import linkedin from "../../../images/social-icons/linkedin.png"

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
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;
const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 20px;
`;
const LogoImage = styled.img`
  height: 60px;
`;
const Waste = styled.span`
  font-weight: 700;
`;
const Watchers = styled.span`
  font-weight: 200;
  position: relative;
  top: 18px;
  right: 25px;
`;
const SocialIcons = styled.img`
height: 25px;
margin: 0px 5px;
`
const SocialContainer = styled.div`
display: inline;
`

export default function Footer() {
  return (
    <FooterContainer>

      <LogoContainer>
        <Logo to="/">
          <LogoImage src="https://i.imgur.com/lp2jwK3.png" />
          <Waste>Waste</Waste> <Watchers>Watchers</Watchers>
        </Logo>
      </LogoContainer>
      <FooterCategory>
        <div className='title'>Connect with Us</div>
        <SocialContainer>
          <a href='#' target='_blank' rel='noopener noreferrer'><SocialIcons src={twitter} /></a>
          <a href='#' target='_blank' rel='noopener noreferrer'><SocialIcons src={facebook} /></a>
          <a href='#' target='_blank' rel='noopener noreferrer'><SocialIcons src={instagram} /></a>
          <a href='#' target='_blank' rel='noopener noreferrer'><SocialIcons src={linkedin} /></a>
        </SocialContainer>
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
