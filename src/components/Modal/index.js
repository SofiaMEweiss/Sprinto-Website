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
  HiddenMessage,
  ModalBtnContainer,
} from "./ModalElements"

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
  //   formSent,
  //   setFormSent,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  //   const [controlledPhoneNumber, setControlledPhoneNumber] = useState("")
  const [phoneNumberTouched, setPhoneNumberTouched] = useState(false)
  const [formSent, setFormSent] = useState(false)

  if (typeof document !== "undefined") {
    if (showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
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
      //   setShowModal(false)
      //   setFormSent(false)
      //   setPhoneNumber("")
      //   setPhoneNumberTouched(prev => !prev)
      mix()
    }
  }

  const mix = () => {
    setShowModal(prev => !prev)
    setPhoneNumber("")
    setPhoneNumberTouched(prev => !prev)
    setFormSent(false)
  }

  //   const back = () => {
  //     // setShowModal(prev => !prev)
  //     // setPhoneNumber("")
  //     // setPhoneNumberTouched(prev => !prev)
  //     // setFormSent(false)
  //     mix()
  //   }

  //För att kunna stänga modal genom att klicka esc (enbart om öppen) och sen ändra state tillbaka till false
  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && showModal) {
        // setShowModal(false)
        // setFormSent(false)
        // setPhoneNumber("")
        // setPhoneNumberTouched(prev => !prev)
        mix()
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  const postPhoneNumber = event => {
    event.preventDefault()
    fetch(
      "https://sprinto-se.azurewebsites.net/api/ContactForm?phoneNumber=" +
        phoneNumber
    )
      .then(response => response.text())
      .then(data => {
        setFormSent(true)
      })
  }

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal} id={id}>
          <ModalWrapper showModal={showModal}>
            <ModalTopContainer>
              <CloseModalIcon
                size={32}
                // onClick={() => setShowModal(prev => !prev)}
                onClick={mix}
              />
            </ModalTopContainer>
            <ModalLeftContainer>
              <ModalImg src={img} alt={alt} />
            </ModalLeftContainer>
            <ModalRightContainer>
              {formSent ? (
                <p>Skickat</p>
              ) : (
                <>
                  <ModalTextContainer>
                    <ModalHeading>{headline}</ModalHeading>
                    <ModalSubtitle>{description}</ModalSubtitle>
                  </ModalTextContainer>
                  <ModalFormContainer
                    onSubmit={event => postPhoneNumber(event)}
                  >
                    <ModalLabel>
                      <ModalInput
                        type="text"
                        maxLength="13"
                        minLength="8"
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
                      <HiddenMessage>{phoneNumberErrorMessage}</HiddenMessage>
                    ) : null}
                    <ModalBtnContainer>
                      <Button
                        type="submit"
                        fontBig={fontBig}
                        big={big}
                        primary={true}
                        dark={true}
                      >
                        {buttonLabel}
                      </Button>
                    </ModalBtnContainer>
                  </ModalFormContainer>
                </>
              )}
            </ModalRightContainer>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  )
}
