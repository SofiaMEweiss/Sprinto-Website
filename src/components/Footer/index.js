import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterH3,
  FooterP,
} from "./FooterElements"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterH3>KOM FÖRBI</FooterH3>
          <FooterP>
            Magnusladulåsgatan {<br />}
            1118 63 Stockholm
          </FooterP>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterH3>HÖR AV DIG</FooterH3>
          <FooterP>Info@sprinto.se{<br />} 070-000 00 00</FooterP>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <SocialIconLink
            href="//www.linkedin.com/company/sprinto/about/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin size={35} />
          </SocialIconLink>
        </FooterLinksWrapper>
        <SocialMediaWrap>
          <WebsiteRights>
            Sprinto © {new Date().getFullYear()}All right reserved.
          </WebsiteRights>
        </SocialMediaWrap>
      </FooterLinksContainer>
    </FooterContainer>
  )
}

export default Footer
