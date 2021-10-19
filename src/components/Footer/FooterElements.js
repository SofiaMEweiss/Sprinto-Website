import styled from "styled-components"

export const FooterWrapper = styled.footer`
  padding: 3rem 0 3rem 0;
  background-color: #373e57;
  color: #eeeae7;

  @media screen and (max-width: 820px) {
    padding: 2rem 0 2rem 0;
  }
`

export const AddressContent = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  padding-bottom: 1.5rem;
`

export const FooterHeading = styled.h3`
  line-height: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const Address = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8rem;
`

export const ContactLink = styled.a`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8rem;
  text-decoration: none;
  color: #eeeae7;
`

export const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  padding-bottom: 1.5rem;
  color: #94e7d3;
`

export const WebsiteRights = styled.p`
  display: flex;
  justify-content: center;
  padding: 2rem 0 0 0;
`
