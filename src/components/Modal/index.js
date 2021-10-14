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
  ValidationMessage,
  ModalBtnContainer,
  AfterSubmitContainer,
  AfterSubmitText,
  AfterSubmitHeading,
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
  sentMessageHeading,
  sentMessage,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [inputFieldTouched, setInputFieldTouched] = useState(false)
  const [formSent, setFormSent] = useState(false)

  //Validering av inputfältet
  const allowedPhoneNumberCharacters = "+0123456789"
  let phoneNumberIsValid = true
  let phoneNumberErrorMessage = ""
  if (phoneNumber === "") {
    phoneNumberIsValid = false
    phoneNumberErrorMessage = "Du glömmer väl inte att fylla i ditt nummer ;)"
  } else if (
    !phoneNumber
      .split("")
      .every(character => allowedPhoneNumberCharacters.includes(character))
  ) {
    phoneNumberIsValid = false
    phoneNumberErrorMessage = "Vi skriver väl inte nummer med bokstäver :)"
  }

  //Återställa modal till ursprungsläge, callback för att funktionen inte ska nyskapas hela tiden utan bara när den ändras/uppdateras
  const resetModal = useCallback(() => {
    setShowModal(prev => !prev)
    setPhoneNumber("")
    setInputFieldTouched(false)
    setFormSent(false)
  }, [setShowModal])

  //För att kunna stänga modal vid klick på bakgrund och återställa modal till ursprungsläge
  const modalRef = useRef()
  const closeModal = e => {
    if (modalRef.current === e.target) {
      resetModal()
    }
  }

  //För att kunna stänga modal genom att klicka esc (enbart om öppen) och återställa modal till ursprungsläge
  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && showModal) {
        resetModal()
      }
    },
    [showModal, resetModal]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  //Postar telefonnumret och ändrar state så skickat meddelandet visas.
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

  //För att bakgrunden ej ska kunna scrollas
  if (typeof document !== "undefined") {
    if (showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal} id={id}>
          <ModalWrapper showModal={showModal}>
            <ModalTopContainer>
              <CloseModalIcon size={32} onClick={resetModal} />
            </ModalTopContainer>
            <ModalLeftContainer>
              <ModalImg src={img} alt={alt} />
            </ModalLeftContainer>
            <ModalRightContainer>
              {formSent ? (
                <AfterSubmitContainer>
                  <AfterSubmitHeading>{sentMessageHeading}</AfterSubmitHeading>
                  <AfterSubmitText>{sentMessage}</AfterSubmitText>
                </AfterSubmitContainer>
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
                        onBlur={() => setInputFieldTouched(true)}
                        onChange={event => {
                          setPhoneNumber(event.target.value)
                        }}
                        value={phoneNumber}
                        valid={phoneNumberIsValid}
                        touched={inputFieldTouched}
                        placeholder="Skriv ditt telefonnummer"
                      />
                    </ModalLabel>
                    {inputFieldTouched ? (
                      <ValidationMessage>
                        {phoneNumberErrorMessage}
                      </ValidationMessage>
                    ) : null}
                    <ModalBtnContainer>
                      <Button
                        //Btn inaktiverad om phoneNumberIsValid är false
                        disabled={!phoneNumberIsValid}
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
