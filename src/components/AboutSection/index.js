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
  DescriptionContent,
  Contact,
  BtnContainer,
  ImgContainer,
  Img,
} from "./InfoElements"
import Typewriter from "./Typewriter"

const InfoSection = ({
  id,
  topLine,
  heading,
  descriptionPartOne,
  descriptionPartTwo,
  descriptionPartThree,
  buttonLabel,
  img,
  alt,
  isActive,
}) => {
  const allMessages = [
    "Snälla",
    "Prestigelösa",
    "Hjälpsamma",
    "Engagerade",
    "Kreativa",
    "Pedagogiska",
    "Orädda",
    "Sociala",
  ]
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
                <TopLine> {topLine} </TopLine>
                <Heading> {heading} </Heading>
                <DescriptionContent>
                  {descriptionPartOne} {<br />}
                  {<br />}
                  {descriptionPartTwo} {<br />}
                  {<br />}
                  {descriptionPartThree}
                </DescriptionContent>
                <Contact>
                  Vi söker alltid efter
                  <Typewriter words={allMessages}></Typewriter>
                </Contact>
                <Contact>kollegor. Ska vi ta en fika ?</Contact>
                <BtnContainer>
                  <Button isActive={isActive} onClick={openModal}>
                    {buttonLabel}
                  </Button>
                  <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    {...modalObj}
                  />
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
