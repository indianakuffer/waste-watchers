import React from 'react'

export default function Footer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Support</Footer.Title>
            <Footer.Link href="#">Help Center</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
            <Footer.Link href="#">Cookies</Footer.Link>
            <Footer.Link href="#">Privacy & Terms</Footer.Link>
            <Footer.Link href="#">Sitemap</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Company</Footer.Title>
            <Footer.Link href="#">About Us</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Press</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
          </Footer.Column>

        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}
