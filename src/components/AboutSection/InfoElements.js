import styled from "styled-components"

export const AboutWrapper = styled.section`
  background: #fff;
`

export const AboutContainer = styled.div`
  max-width: 1400px;
  z-index: 1;
  margin: auto;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    padding: 0 0 60px 0;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1;
  /* border: red solid 1px; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  /* border: red solid 1px; */
`

export const TextContainer = styled.div`
  max-width: 540px;
  padding: 60px 0;
  /* border: red solid 1px; */
`

export const TopLine = styled.p`
  margin-bottom: 48px;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #787a80;
  /* border: red solid 1px; */
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: bold;
  color: #000;
  /* border: red solid 1px; */

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #000;
  /* border: red solid 1px; */

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`

export const Contact = styled.p`
  margin-bottom: 15px;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #000;
  font-weight: bold;
  /* border: red solid 1px; */

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.1rem;
  }
`

export const Typewriter = styled.span`
  margin: 0 0 15px 4px;
  font-size: 1.3rem;
  line-height: 32px;
  color: #000;
  font-weight: bold;
  background: #f7a58f;
  padding: 0 4px;
  /* border: red solid 1px; */
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.1rem;
  }
`
export const Cursor = styled.span`
  margin-bottom: 15px;
  font-size: 1.3rem;
  line-height: 32px;
  color: #000;
  font-weight: bold;
  padding: 0 4px 0 0;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.1rem;
  }
  /* border: red solid 1px; */
`

export const BtnContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  /* border: red solid 1px; */
`

export const ImgContainer = styled.div`
  max-width: 555px;
  height: 100%;
  /* border: red solid 1px; */
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  /* border: red solid 1px; */
`
