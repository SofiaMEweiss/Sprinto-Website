import styled from "styled-components"

export const TeamWrapper = styled.section`
  background: #eeeae7;
`

export const TeamContainer = styled.div`
  max-width: 1400px;
  padding: 4rem 1.5rem;
  margin: auto;

  @media screen and (max-width: 768px) {
    padding: 6rem 5rem 0 5rem;
  }

  @media screen and (max-width: 600px) {
    padding: 6rem 1.5rem 0 1.5rem;
  }
`

export const TopLine = styled.p`
  margin-bottom: 3rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #373e57;
`

export const TeamCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15rem;
  row-gap: 4rem;

  @media screen and (max-width: 1400px) {
    column-gap: 12%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`

export const TeamImg = styled.img`
  height: 15rem;
  width: 15rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 320px) {
    height: 14rem;
    width: 14rem;
  }
`

export const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
`

export const Delimiter = styled.hr`
  height: 4px;
  width: 10em;
  margin-bottom: 1.5rem;
  background-color: #373e57;
  border: none;
`

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.9rem;
`
