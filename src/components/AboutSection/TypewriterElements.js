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
    font-size: var(--paragraph-font-size);
    font-weight: bold;
    color: var(--cta-color);
  }
`

export const DesktopTypewriter = styled.span`
  margin: 0 0 0 0.25rem;
  font-size: var(--paragraph-font-size);
  font-weight: bold;
  color: var(--cta-color);
`

export const Cursor = styled.span`
  font-size: var(--paragraph-font-size);
  font-weight: bold;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`
