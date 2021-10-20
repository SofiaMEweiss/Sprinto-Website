import styled from "styled-components"

export const AboutWrapper = styled.section`
  background: var(--background-color);
`

export const AboutContainer = styled.div`
  max-width: 1400px;
  padding: 4rem 0px;
  margin: auto;

  @media screen and (max-width: 768px) {
    padding-top: 6rem;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 1.5rem;
  color: var(--font-color);
`

export const TextContainer = styled.section``

export const TopLine = styled.h3`
  margin-bottom: 3rem;
  font-size: var(--paragraph-font-size);
  font-weight: bold;
  text-transform: uppercase;
  color: var(--primary-color);
`

export const Heading = styled.h2`
  margin-bottom: 3rem;
  font-size: var(--heading-font-size);
  font-weight: bold;
  line-height: 1.2;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const DescriptionContent = styled.p`
  margin-bottom: 3rem;
  font-size: var(--paragraph-font-size);
  line-height: 1.9rem;
`

export const Contact = styled.p`
  font-size: var(--paragraph-font-size);
  line-height: 1.7rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 4rem;
  }
`

export const Img = styled.img`
  width: 100%;
`
