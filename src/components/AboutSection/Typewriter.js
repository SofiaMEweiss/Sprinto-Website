import React, { useState, useEffect } from "react"
import styled from "styled-components"

const StyledTypewriter = styled.span`
  margin: 0 0 0px 4px;
  font-size: 1.1rem;
  color: #f7a58f;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.1rem;
  }
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

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.1rem;
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
      <StyledTypewriter> {typewriterText}</StyledTypewriter>
      <Cursor> _ </Cursor>
    </>
  )
}

export default Typewriter
