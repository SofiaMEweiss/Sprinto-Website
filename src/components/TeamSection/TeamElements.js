import styled from "styled-components"

export const TeamWrapper = styled.section`
  display: flex;
  justify-content: center;
  background: #eeeae7;
`

export const TeamContainer = styled.div``

export const TeamCardContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* align-items: center; */
  column-gap: 240px;
  row-gap: 60px;
  padding: 0 9px 60px 9px;

  @media screen and (max-width: 1400px) {
    column-gap: 160px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px 60px 20px;
  }
`

export const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  /* height: 640px; */
  height: auto;
  padding: 0px 0px 30px 0px;
  margin: 15px;
  /* border: red solid 1px; */

  /* @media screen and (max-width: 1270px) {
    height: 700px;
    height: auto;
  }

  @media screen and (max-width: 1000px) {
    height: 800px;
    height: auto;
  }

  @media screen and (max-width: 800px) {
    height: 820px;
    height: auto;
  } */

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`

export const TeamImg = styled.img`
  height: 240px;
  width: 240px;
  margin-bottom: 20px;
`

export const TeamH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`
export const TeamP = styled.p`
  font-size: 1.1rem;
  line-height: 1.8em;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    margin: 0 50px;
  }

  @media screen and (max-width: 500px) {
    margin: 0px;
  }
`

export const TeamH3 = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: 500;
`

export const TopLine = styled.p`
  margin-bottom: 48px;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #373e57;
  padding: 60px 24px 0 24px;
`

export const Delimiter = styled.hr`
  height: 4px;
  /* width: 25%; */
  width: 10em;
  border: none;
  background-color: #373e57;

  margin-bottom: 24px;
  /* background-color: ${({ newColor }) =>
    newColor ? "#373e57" : "#94e7d3"}; */
  /* &:nth-child(odd) {
    background-color: #94e7d3;
  } */

  /* @media screen and (max-width: 1300px) {
    width: 35%;
  }

  @media screen and (max-width: 1300px) {
    width: 40%;
  }

  @media screen and (max-width: 1050px) {
    width: 45%;
  }

  @media screen and (max-width: 950px) {
    width: 55%;
  } */

  /* @media screen and (max-width: 768px) {
    width: 10em;
  } */
`
