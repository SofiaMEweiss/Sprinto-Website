import styled from "styled-components"

export const FooterWrapper = styled.footer`
  padding: 3em 0 3em 0;
  background-color: #373e57;
  color: #eeeae7;

  @media screen and (max-width: 820px) {
    padding: 2em 0 2em 0;
  }
`

export const AddressContent = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  padding-bottom: 1.5em;
`

export const FooterHeading = styled.h3`
  line-height: 1.6em;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const Address = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6em;
`

export const ContactLink = styled.a`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6em;
  text-decoration: none;
  color: #eeeae7;
`

export const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  padding-bottom: 1.5em;
  color: #94e7d3;
`

export const WebsiteRights = styled.p`
  display: flex;
  justify-content: center;
  padding: 2em 0 0 0;
`
