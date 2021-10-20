import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
`

export const ModalWrapper = styled.section`
  position: relative;
  width: 720px;
  height: 550px;
  padding: 1.5rem;
  background: var(--primary-color);
  border-radius: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  color: var(--tertiary-color);
`
export const IconContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`

export const CloseIcon = styled(FaTimes)``

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ModalLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 660px) {
    padding-right: 0rem;
  } ;
`

export const ModalImg = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`

export const ModalRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    padding-left: 0rem;
    text-align: center;
  } ;
`

export const ModalHeading = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: var(--subheading-font-size);
  font-weight: bold;

  @media screen and (max-width: 400px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 320px) {
    font-size: var(--paragraph-font-size);
  }

  @media screen and (max-width: 280px) {
    font-size: 1rem;
  } ;
`

export const ModalSubtitle = styled.p`
  display: flex;
  font-size: var(--paragraph-font-size);
  line-height: 1.8rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    margin: 0 3rem 3rem 0;
  }

  @media screen and (max-width: 500px) {
    margin: 0 0rem 3rem 0;
  }
`
export const ModalFormContainer = styled.form``
export const ModalLabel = styled.label`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eeeae7;
`

export const ModalInput = styled.input`
  width: 100%;
  padding: 0.5rem 0 0.2rem 0;
  border: none;
  outline: inherit;
  background-color: var(--primary-color);
  text-align: center;
  font-size: var(--paragraph-font-size);
  letter-spacing: 0.2rem;
  color: var(--secondary-color);
  transition: width 0.4s ease-in-out;

  ::placeholder {
    letter-spacing: 0rem;
    color: var(--placeholder-color);
  }
`

export const ValidationMessage = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: var(--validation-font-size);
  text-align: center;
`

export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 0 0;
`

export const AfterSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AfterSubmitHeading = styled.h2`
  font-size: var(--subheading-font-size);
  font-weight: bold;
`

export const AfterSubmitText = styled.p`
  font-size: var(--paragraph-font-size);
  line-height: 1.8em;
`
