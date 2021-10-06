import React from "react"
import { FaLinkedin } from "react-icons/fa"
import {
  FooterWrapper,
  FooterContainer,
  FooterH3,
  FooterP,
  SocialIconLink,
  WebsiteRights,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterH3> KOM FÖRBI </FooterH3>
        <FooterP>
          Magnus Ladulåsgatan 1 {<br />}
          118 65 Stockholm
        </FooterP>{" "}
      </FooterContainer>{" "}
      <FooterContainer>
        <FooterH3> HÖR AV DIG </FooterH3>{" "}
        <FooterP>
          {" "}
          kontakt@sprinto.se {<br />}
          072 - 300 36 42{" "}
        </FooterP>{" "}
      </FooterContainer>{" "}
      <FooterContainer>
        <SocialIconLink
          href="//www.linkedin.com/company/sprinto/about/"
          target="_blank"
          aria-label="Linkedin"
        >
          <FaLinkedin size={35} />{" "}
        </SocialIconLink>{" "}
      </FooterContainer>{" "}
      <WebsiteRights>
        Sprinto© {new Date().getFullYear()}
        All right reserved.{" "}
      </WebsiteRights>{" "}
    </FooterWrapper>
  )
}

export default Footer
