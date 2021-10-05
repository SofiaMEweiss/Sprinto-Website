import React, { useState, useRef, useEffect, useCallback } from "react"
import {
  Background,
  ModalContainer,
  CloseModalButton,
  ModalImg,
  ModalRight,
  ModalLeft,
  ModalH2,
  ModalP,
  ModalLabel,
  ModalInput,
  BtnContainer,
  ModalTop,
} from "./ModalElements"
import Modalpic from "../../images/modalpic2.svg"
import "./Modal.css"
import { Button } from "../ButtonElement"

export const Modal = ({
  showModal,
  setShowModal,
  fontBig,
  big,
  primary,
  dark,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  //   const [controlledPhoneNumber, setControlledPhoneNumber] = useState("")
  const [phoneNumberTouched, setPhoneNumberTouched] = useState(false)

  const allowedPhoneNumberCharacters = "0123456789"
  let phoneNumberIsValid = true
  let phoneNumberErrorMessage = ""
  if (phoneNumber === "") {
    phoneNumberIsValid = false
    phoneNumberErrorMessage = "Du glömmer väl inte att fylla i ditt nummer ;)"
  } else if (
    !phoneNumber
      .split("")
      .every(char => allowedPhoneNumberCharacters.includes(char))
  ) {
    phoneNumberIsValid = false
    phoneNumberErrorMessage = "Vänligen skriv din telefonnummer med siffror"
  }

  let phoneNumberClass = ""
  if (phoneNumberTouched) {
    phoneNumberClass = phoneNumberIsValid ? "valid" : "error"
  }

  const modalRef = useRef()
  //För att kunna stänga modal vid klick på bakgrund och ändra state tillbaka till false
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  //För att kunna stänga modal genom att klicka esc (enbart om öppen) och ändra state tillbaka till false
  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])
  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalContainer showModal={showModal}>
            <ModalTop>
              <CloseModalButton onClick={() => setShowModal(prev => !prev)} />
            </ModalTop>
            <ModalLeft>
              <ModalImg src={Modalpic} />
            </ModalLeft>
            <ModalRight>
              <ModalH2>Kontakta mig om tid att ses</ModalH2>
              <ModalP>
                Är du intresserad av att veta mer om Sprinto? Vi bjuder gärna på
                fika och berättar. Fyll i ditt telefonnummer nedan så ringer vi
                upp dig innan lunch/dagen är slut.
              </ModalP>
              <ModalLabel>
                Skriv ditt telefonnummer <br />
                <ModalInput
                  type="text"
                  onBlur={() => setPhoneNumberTouched(true)}
                  onChange={event => {
                    console.log("Controlled change", event.target.value)
                    setPhoneNumber(event.target.value)
                    // setControlledPhoneNumber(event.target.value)
                  }}
                  value={phoneNumber}
                  className={phoneNumberClass}
                />
              </ModalLabel>
              {phoneNumberTouched ? (
                <div className="message-hidden">{phoneNumberErrorMessage}</div>
              ) : null}
              <BtnContainer>
                <Button fontBig={fontBig} big={big} primary={true} dark={true}>
                  Kontakta mig
                </Button>
              </BtnContainer>
            </ModalRight>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  )
}

// export default Modal

// import React from "react"
// import styled from "styled-components"
// // import { Background, ModalContainer, CloseModalButton } from "./ModalElements"
// import { FaTimes } from "react-icons/fa"
// import Profile from "../../images/profile.svg"

// const Background = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const ModalContainer = styled.div`
//   width: 800px;
//   height: 500px;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: #fff;
//   color: #000;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   z-index: 10;
//   border-radius: 10px;
// `

// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `

// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;
// `

// const ModalP = styled.p`
//   margin-bottom: 1rem;
// `

// const ModalButton = styled.button`
//   padding: 10px 24px;
//   background: #141414;
//   color: #fff;
//   border: none;
// `

// const CloseModalButton = styled(FaTimes)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 10;
// `

// export const Modal = ({ showModal, setShowModal }) => {
//   return (
//     <>
//       {showModal ? (
//         <Background>
//           <ModalContainer showModal={showModal}>
//             <ModalImg src={require({ Profile })} alt="Camera" />
//             <ModalContent>
//               <ModalP>
//                 HEEEEj
//                 <ModalButton>Join</ModalButton>
//               </ModalP>
//             </ModalContent>
//             <CloseModalButton onClick={() => setShowModal(prev => !prev)} />
//           </ModalContainer>
//         </Background>
//       ) : null}
//     </>
//   )
// }
