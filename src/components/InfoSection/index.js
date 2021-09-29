import React from "react"
import { useEffect } from "react"
import { Button } from "../ButtonElement"
import image from "../../images/programming.svg"

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements"

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  //   img,
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
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText}> {headline} </Heading>
                <Subtitle darkText={darkText}> {description} </Subtitle>
                <Subtitle darkText={darkText}>
                  Vi söker alltid efter <span id="typewriterMessage"></span>
                  <span>_</span>{" "}
                  <Subtitle darkText={darkText}>
                    kollegor. Ska vi ta en fika?
                  </Subtitle>
                </Subtitle>
                <BtnWrap>
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
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
