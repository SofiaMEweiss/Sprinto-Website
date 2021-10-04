import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 80%;
  max-height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  /* border: red solid 1px; */
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const ModalImg = styled.img`
  /* height: 160px; */
  width: 100%;
  /* border: red solid 1px; */
`

export const ModalLeft = styled.div`
  display: flex;
  justify-content: center;
  /* border: red solid 1px; */
`

export const ModalRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: red solid 1px; */
`

export const ModalH2 = styled.h2`
  /* border: red solid 1px; */
  display: flex;
  /* justify-content: center; */
  padding: 0 30px 0 30px;
`

export const ModalP = styled.p`
  /* border: red solid 1px; */
  display: flex;
  justify-content: center;
  /* text-align: center; */
  padding: 0 30px 0 30px;
`

export const ModalLabel = styled.label`
  /* border: red solid 1px; */
  font-size: 0.9em;
  font-weight: bold;
  /* display: flex;
	justify-content: center; */
  text-align: center;
  padding: 0 30px 0 30px;
`

export const ModalInput = styled.input`
  /* border: red solid 1px; */
  width: 50%;
  padding-left: 0.5em;
  border-radius: 0.3em;
  border-width: 3px;
  font-size: 1.1em;
  padding: 0 30px 0 30px;
`

export const CloseModalButton = styled(FaTimes)`
  cursor: pointer;
  display: flex;
  align-self: flex-end;
  width: 40px;
  height: 40px;
  z-index: 10;
  padding: 0 20px 0 0;
  /* border: red solid 1px; */
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 20px 0;
  /* border: red solid 1px; */
`
