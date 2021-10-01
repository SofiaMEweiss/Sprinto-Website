import React from "react"
import { useEffect } from "react"
import { Button } from "../ButtonElement"

import {
  AboutWrapper,
  AboutContainer,
  GridContainer,
  ContentContainer,
  TextContainer,
  TopLine,
  Heading,
  Subtitle,
  Typewriter,
  Cursor,
  Contact,
  BtnContainer,
  ImgContainer,
  Img,
} from "./InfoElements"

const InfoSection = ({
  id,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  fontBig,
  big,
  primary,
  dark,
}) => {
  const messageToType = "Härliga"
  let cursorPosition = 0
  const typewriterspeed = 200

  useEffect(typewriter)

  function typewriter() {
    const span = document.getElementById("typewriterMessage")
    span.innerHTML = messageToType.substring(0, cursorPosition)
    cursorPosition++

    if (cursorPosition <= messageToType.length) {
      setTimeout(typewriter, typewriterspeed)
    }
  }

  return (
    <>
      <AboutWrapper id={id}>
        <AboutContainer>
          <GridContainer>
            <ContentContainer>
              <TextContainer>
                <TopLine> {topLine} </TopLine>
                <Heading> {headline} </Heading>
                <Subtitle> {description} </Subtitle>
                <Contact>
                  Vi söker alltid efter
                  <Typewriter id="typewriterMessage"></Typewriter>
                  <Cursor>_</Cursor>
                  <Contact>kollegor. Ska vi ta en fika?</Contact>
                </Contact>
                <BtnContainer>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    fontBig={fontBig}
                    big={big}
                    primary={primary}
                    dark={dark}
                  >
                    {buttonLabel}
                  </Button>
                </BtnContainer>
              </TextContainer>
            </ContentContainer>
            <ContentContainer>
              <ImgContainer>
                <Img src={img} alt={alt} />
              </ImgContainer>
            </ContentContainer>
          </GridContainer>
        </AboutContainer>
      </AboutWrapper>
    </>
  )
}

export default InfoSection
