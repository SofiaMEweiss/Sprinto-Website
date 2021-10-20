import styled from "styled-components"

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  height: 100vh;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(
        -188deg,
        rgba(240, 239, 239, 0.6) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 8%, transparent 100%);
  }
`

export const HeaderBgContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`

export const HeaderVideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: grayscale(50%);
`

export const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
`

export const Heading = styled.h1`
  color: var(--tertiary-color);
  text-align: center;
  font-size: var(--header-heading-font-size);
  padding: 0 1.5rem;

  @media screen and (max-width: 1100px) {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 838px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 760px) {
    font-size: 2rem;
  }
`
