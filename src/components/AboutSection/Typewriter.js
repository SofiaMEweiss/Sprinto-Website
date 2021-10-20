import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const SecondContainer = styled.div`
  display: inline-block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Mobile = styled.span`
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.1rem;
    color: #f7a58f;
    font-weight: bold;
    /* display: inline-block; */
  }
`

const StyledTypewriter = styled.span`
  margin: 0 0 0px 4px;
  font-size: 1.1rem;
  color: #f7a58f;
  font-weight: bold;
`

const Cursor = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`

const Typewriter = ({ words }) => {
  const typewriterspeed = 300
  const [typewriterText, setTypewriterText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const messageToType = words[wordIndex]
      if (typewriterText.length < messageToType.length) {
        setTypewriterText(typewriterText + messageToType[typewriterText.length])
      } else {
        if (wordIndex < words.length - 1) {
          setWordIndex(wordIndex + 1)
        } else {
          setWordIndex(0)
        }
        setTypewriterText("")
      }
    }, typewriterspeed)
    return () => clearInterval(interval)
  }, [typewriterText])

  return (
    <>
      <Container>
        <Mobile> {typewriterText}</Mobile>
        <Cursor> _ </Cursor>
      </Container>
      <SecondContainer>
        <StyledTypewriter> {typewriterText}</StyledTypewriter>
        <Cursor> _ </Cursor>
      </SecondContainer>
    </>
  )
}

export default Typewriter
