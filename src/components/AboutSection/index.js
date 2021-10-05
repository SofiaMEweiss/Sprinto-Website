import React from "react"
import { useState } from "react"
import { Button } from "../ButtonElement"
import { Modal } from "../Modal"
import { modalObj } from "../Modal/Data"

import {
  AboutWrapper,
  AboutContainer,
  GridContainer,
  ContentContainer,
  TextContainer,
  TopLine,
  Heading,
  Subtitle,
  Cursor,
  Contact,
  BtnContainer,
  ImgContainer,
  Img,
} from "./InfoElements"
import Typewriter from "./Typewriter"

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
  const allMessages = ["Härliga", "Roliga", "Trevliga"]
  const [showModal, setShowModal] = useState(false)

  //Ändrar state från förgående, för att toggla modalen
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <>
      <AboutWrapper id={id}>
        <AboutContainer>
          <GridContainer>
            <ContentContainer>
              <TextContainer>
                <TopLine> {topLine} </TopLine> <Heading> {headline} </Heading>{" "}
                <Subtitle> {description}</Subtitle>{" "}
                <Contact>
                  Vi söker alltid efter{" "}
                  <Typewriter words={allMessages}></Typewriter>{" "}
                  <Cursor> _ </Cursor>{" "}
                  <Contact> kollegor. Ska vi ta en fika ? </Contact>{" "}
                </Contact>{" "}
                <BtnContainer>
                  {/* <Button
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
                    onClick={openModal}
                  > */}
                  <Button
                    fontBig={fontBig}
                    big={big}
                    primary={primary}
                    dark={dark}
                    onClick={openModal}
                  >
                    {buttonLabel}{" "}
                  </Button>
                  <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    {...modalObj}
                  />
                </BtnContainer>{" "}
              </TextContainer>{" "}
            </ContentContainer>{" "}
            <ContentContainer>
              <ImgContainer>
                <Img src={img} alt={alt} />{" "}
              </ImgContainer>{" "}
            </ContentContainer>{" "}
          </GridContainer>{" "}
        </AboutContainer>{" "}
      </AboutWrapper>{" "}
    </>
  )
}

export default InfoSection
