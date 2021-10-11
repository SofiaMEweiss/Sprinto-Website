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
  column-gap: 120px;
  row-gap: 60px;
  padding: 0 0 60px 0;
  /* border: red solid 1px; */

  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  } */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const TeamCard = styled.div`
  /* background: white; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /* align-items: center; */
  border-radius: 10px;
  height: 720px;
  padding: 0px 0px 30px 0px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  /* transition: all 0.2s ease-in-out; */
  margin: 15px;
  /* border: red solid 1px; */

  /* &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  } */

  @media screen and (max-width: 768px) {
    height: auto;
  }
`

export const TeamIcon = styled.img`
  height: 240px;
  width: 240px;
  margin-bottom: 20px;
`

export const TeamH2 = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 10px;
`
export const TeamP = styled.p`
  font-size: 1.3rem;
  line-height: 1.8em;
  margin-bottom: 8px;
  /* text-align: center; */
`

export const TeamH3 = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 8px;
  font-weight: 500;
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

export const Delimiter = styled.hr`
  height: 4px;
  width: 25%;
  border: none;
  background-color: #373e57;
  margin-bottom: 24px;
  /* background-color: ${({ newColor }) =>
    newColor ? "#373e57" : "#94e7d3"}; */
  /* &:nth-child(odd) {
    background-color: #94e7d3;
  } */
`
