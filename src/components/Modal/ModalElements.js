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
  max-width: 700px;
  height: 550px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #373e57;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 8fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 20px;
  /* border: red solid 1px; */
  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0fr 8fr;
    /* grid-template-rows: 1fr 1fr 1fr; */
  }
`

export const ModalImg = styled.img`
  /* height: 160px; */
  width: 100%;
  /* border: red solid 1px; */

  @media screen and (max-width: 540px) {
    display: none;
  } ;
`

export const ModalLeft = styled.div`
  display: flex;
  justify-content: center;
  /* border: red solid 1px; */
`

export const ModalRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-around; */
  /* border: red solid 1px; */
`

export const ModalH2 = styled.h2`
  /* border: red solid 1px; */
  display: flex;
  /* justify-content: center; */
  padding: 0 30px 10px 30px;
`

export const ModalP = styled.p`
  /* border: red solid 1px; */
  display: flex;
  justify-content: center;
  /* text-align: center; */
  padding: 0 30px 50px 30px;
`

export const ModalLabel = styled.label`
  /* border: red solid 1px; */
  font-size: 1rem;
  font-weight: bold;
  /* display: flex;
	justify-content: center; */
  text-align: center;
  padding: 0 30px 10px 30px;
`

export const ModalInput = styled.input`
  /* border: red solid 1px; */
  width: 50%;
  padding-left: 0.5em;
  border-radius: 0.3em;
  border-width: 3px;
  font-size: 1.1em;
  margin-top: 10px;
  /* padding: 0 30px 0 30px; */
  ${ props => props.touched ? (props.valid ? 'border-color: green;' : 'border-color: red;') : '' }
`

export const ModalTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 1/3;
  /* border: red solid 1px; */

  @media screen and (max-width: 660px) {
    grid-column: 1/2;
    /* grid-template-rows: 1fr 1fr 1fr; */
  }
`

export const CloseModalButton = styled(FaTimes)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  z-index: 10;
  padding: 0 20px 0 0;
  /* grid-column: 1/3; */
  /* border: red solid 1px; */
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
  /* border: red solid 1px; */
`
