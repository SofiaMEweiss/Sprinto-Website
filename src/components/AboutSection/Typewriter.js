import React, { useState, useEffect } from "react"
import {
  MobileContainer,
  MobileTypewriter,
  Cursor,
  DesktopContainer,
  DesktopTypewriter,
} from "./TypewriterElements"

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
      <MobileContainer>
        <MobileTypewriter> {typewriterText}</MobileTypewriter>
        <Cursor>_</Cursor>
      </MobileContainer>
      <DesktopContainer>
        <DesktopTypewriter> {typewriterText}</DesktopTypewriter>
        <Cursor>_</Cursor>
      </DesktopContainer>
    </>
  )
}

export default Typewriter
