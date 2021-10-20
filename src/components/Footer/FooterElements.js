import styled from "styled-components"

export const FooterWrapper = styled.footer`
  padding: 3rem 0 3rem 0;
  background-color: var(--primary-color);
  color: var(--tertiary-color);

  @media screen and (max-width: 820px) {
    padding: 2rem 0 2rem 0;
  }
`

export const AddressContent = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  margin-bottom: 1.5rem;
`

export const FooterHeading = styled.h3`
  line-height: 2rem;
  font-size: var(--subheading-font-size);
  font-weight: bold;
  text-transform: uppercase;
`

export const Address = styled.p`
  text-align: center;
  font-size: var(--paragraph-font-size);
  line-height: 1.8rem;
`

export const ContactLink = styled.a`
  text-align: center;
  font-size: var(--paragraph-font-size);
  line-height: 1.8rem;
  text-decoration: none;
  color: var(--tertiary-color);
`

export const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
`

export const WebsiteRights = styled.p`
  display: flex;
  justify-content: center;
  margin: 2rem 0 0 0;
`
