import React, { useState, useRef, useEffect, useCallback } from "react"
import { Button } from "../ButtonElement"
import {
  Background,
  ModalWrapper,
  ModalTopContainer,
  CloseModalIcon,
  ModalLeftContainer,
  ModalImg,
  ModalRightContainer,
  ModalTextContainer,
  ModalHeading,
  ModalSubtitle,
  ModalFormContainer,
  ModalLabel,
  ModalInput,
  ModalBtnContainer,
} from "./ModalElements"
import "./Modal.css"

export const Modal = ({
  showModal,
  setShowModal,
  fontBig,
  big,
  id,
  headline,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  //   const [controlledPhoneNumber, setControlledPhoneNumber] = useState("")
  const [phoneNumberTouched, setPhoneNumberTouched] = useState(false)

  if (showModal) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

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
    phoneNumberErrorMessage = "Vi skriver väl inte nummer med bokstäver :)"
  }

  //För att kunna stänga modal vid klick på bakgrund och sen ändra state tillbaka till false
  const modalRef = useRef()
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  //För att kunna stänga modal genom att klicka esc (enbart om öppen) och sen ändra state tillbaka till false
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
        <Background ref={modalRef} onClick={closeModal} id={id}>
          <ModalWrapper showModal={showModal}>
            <ModalTopContainer>
              <CloseModalIcon
                size={32}
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalTopContainer>
            <ModalLeftContainer>
              <ModalImg src={img} alt={alt} />
            </ModalLeftContainer>
            <ModalRightContainer>
              <ModalTextContainer>
                <ModalHeading>{headline}</ModalHeading>
                <ModalSubtitle>{description}</ModalSubtitle>
              </ModalTextContainer>
              <ModalFormContainer>
                <ModalLabel>
                  <ModalInput
                    type="text"
                    onBlur={() => setPhoneNumberTouched(true)}
                    onChange={event => {
                      console.log("Controlled change", event.target.value)
                      setPhoneNumber(event.target.value)
                      // setControlledPhoneNumber(event.target.value)
                    }}
                    value={phoneNumber}
                    valid={phoneNumberIsValid}
                    touched={phoneNumberTouched}
                    placeholder="Skriv ditt telefonnummer"
                  />
                </ModalLabel>
                {phoneNumberTouched ? (
                  <div className="message-hidden">
                    {phoneNumberErrorMessage}
                  </div>
                ) : null}
                <ModalBtnContainer>
                  <Button
                    fontBig={fontBig}
                    big={big}
                    primary={true}
                    dark={true}
                  >
                    {buttonLabel}
                  </Button>
                </ModalBtnContainer>
              </ModalFormContainer>
            </ModalRightContainer>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  )
}
