import styled from "styled-components"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  padding: 48px 0 48px 0;
  background-color: #373e57;
  color: #eeeae7;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 1.5em 0;
`

export const FooterH3 = styled.h3`
  padding: 0.2em;
  font-size: 1.5rem;
  font-weight: bold;
`

export const FooterP = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8rem;
`

export const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.2em;
  color: #94e7d3;
`

export const WebsiteRights = styled.p`
  display: flex;
  justify-content: center;
  padding: 32px 0 0 0;
  color: #fff;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`
