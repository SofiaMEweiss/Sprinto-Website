import styled from "styled-components"

export const MobileContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const DesktopContainer = styled.div`
  display: inline-block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileTypewriter = styled.span`
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: #f7a58f;
  }
`

export const DesktopTypewriter = styled.span`
  margin: 0 0 0 0.25rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #f7a58f;
`

export const Cursor = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`
