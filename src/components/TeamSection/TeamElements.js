import styled from "styled-components"

export const TeamWrapper = styled.section`
  background: #eeeae7;
`

export const TeamContainer = styled.div`
  max-width: 1400px;
  z-index: 1;
  margin: auto;
  padding: 0 24px;
  /* border: red solid 1px; */

  @media screen and (max-width: 768px) {
    padding: 0 0 60px 0;
  }
`

export const TextContainer = styled.div`
  /* max-width: 540px; */
  padding: 60px 15px 0 15px;

  /* border: red solid 1px; */
`

export const TeamW = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 60px;
  padding: 0 0 60px 0;

  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  } */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const TeamCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  border-radius: 10px;
  height: 480px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin: 15px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }
`

export const TeamIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const TeamH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`
export const TeamP = styled.p`
  font-size: 1rem;
  /* text-align: center; */
`

export const TopLine = styled.p`
  margin-bottom: 48px;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #373e57;
  /* border: red solid 1px; */
`
