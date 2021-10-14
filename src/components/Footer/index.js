import React from "react"
import { FaLinkedin } from "react-icons/fa"
import {
  FooterWrapper,
  FooterHeading,
  AddressContent,
  Address,
  ContactLink,
  SocialIconLink,
  WebsiteRights,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterWrapper>
      <AddressContent>
        <FooterHeading> Kom förbi </FooterHeading>
        <Address>
          Magnus Ladulåsgatan 1 {<br />}
          118 65 Stockholm
        </Address>
      </AddressContent>
      <AddressContent>
        <FooterHeading> Hör av dig </FooterHeading>
        <ContactLink href="mailto:kontakt@sprinto.se">
          kontakt@sprinto.se
        </ContactLink>
        <ContactLink href="tel: +4672300 36 42">072 - 300 36 42</ContactLink>
      </AddressContent>
      <SocialIconLink
        href="//www.linkedin.com/company/sprinto/about/"
        target="_blank"
        aria-label="Linkedin"
      >
        <FaLinkedin size={36} />
      </SocialIconLink>
      <WebsiteRights>
        Sprinto© {new Date().getFullYear()}
        All right reserved.
      </WebsiteRights>
    </FooterWrapper>
  )
}

export default Footer
