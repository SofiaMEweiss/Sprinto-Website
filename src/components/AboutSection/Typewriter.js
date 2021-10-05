import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTypewriter = styled.span`
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

const Typewriter = ({ words }) => {
    const typewriterspeed = 200;
    const [typewriterText, setTypewriterText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const messageToType = words[wordIndex];
            if (typewriterText.length < messageToType.length) {
                setTypewriterText(typewriterText + messageToType[typewriterText.length]);
            } else {
                if (wordIndex < words.length - 1) {
                    setWordIndex(wordIndex + 1);
                } else {
                    setWordIndex(0);
                }
                setTypewriterText('');
            }
        }, typewriterspeed);
        return () => clearInterval(interval);
    }, [typewriterText]);

    return <StyledTypewriter>{typewriterText}</StyledTypewriter>
}

export default Typewriter;