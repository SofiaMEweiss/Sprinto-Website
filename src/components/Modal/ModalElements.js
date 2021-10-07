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
  width: 720px;
  height: 550px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 8fr;
  padding: 1.5em;
  background: #373e57;
  border-radius: 0.8em;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  color: #fff;

  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0fr 8fr;
  }
`
export const ModalTopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column: 1/3;
`

export const CloseModalIcon = styled(FaTimes)`
  cursor: pointer;
`

export const ModalLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 1em;

  @media screen and (max-width: 660px) {
    padding-right: 0px;
  } ;
`

export const ModalImg = styled.img`
  width: 100%;

  @media screen and (max-width: 660px) {
    display: none;
  } ;
`

export const ModalRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 1em;

  @media screen and (max-width: 660px) {
    padding-left: 0px;
    text-align: center;
    grid-row: 2/4;
  } ;
`
export const ModalTextContainer = styled.div``

export const ModalHeading = styled.h2`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 3rem;

  @media screen and (max-width: 660px) {
    justify-content: center;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.1rem;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 280px) {
    font-size: 1rem;
    line-height: 2.3rem;
  } ;
`

export const ModalSubtitle = styled.p`
  display: flex;
  font-size: 1rem;
  line-height: 1.5rem;
`
export const ModalFormContainer = styled.form``
export const ModalLabel = styled.label`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #fff;
`

export const ModalInput = styled.input`
  width: 100%;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  padding: 0.5em 0 0.2em 1em;
  border-radius: 1em;
  outline: inherit;
  border: none;
  color: #94e7d3;
  text-align: center;
  background-color: #373e57;
  transition: width 0.4s ease-in-out;
  /* ${props =>
    props.touched
      ? props.valid
        ? "border-color: green;"
        : "border-color: red;"
      : ""}  */

  ::placeholder {
    letter-spacing: 0rem;
    color: #a09c9c;
  }
`

export const HiddenMessage = styled.p`
  padding: 0.5em 0 0 0;
  text-align: center;
`

export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em 0 3em 0;
`
