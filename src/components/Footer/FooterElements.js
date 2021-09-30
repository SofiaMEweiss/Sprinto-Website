import styled from "styled-components"
import { Link } from "gatsby"

export const FooterContainer = styled.footer`
  background-color: #373e57;
  color: #fff;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: red solid 1px; */
  padding: 48px;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`
export const FooterLinksWrapper = styled.div`
  display: flex;
  /* border: red solid 1px; */
  flex-direction: column;
  padding: 0 0 1.5em 0;
  align-items: center;
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  /* border: red solid 1px; */
`

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  flex-direction: column;
  /* border: red solid 1px; */

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const WebsiteRights = styled.small`
  color: white;
  /* border: red solid 1px; */
  display: flex;
  align-items: center;
`

export const SocialIconLink = styled.a`
  color: #94e7d3;
  font-size: 24px;
  /* border: red solid 1px; */
`

export const FooterH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.2em;
`

export const FooterP = styled.p`
  line-height: 1.8rem;
  font-size: 1.1rem;
  text-align: center;
`
