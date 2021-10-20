import React from "react"
import {
  TeamWrapper,
  TeamContainer,
  TopLine,
  TeamCardContainer,
  TeamCard,
  TeamImg,
  Heading,
  Title,
  Delimiter,
  Description,
} from "./TeamElements"
import { employees } from "../TeamSection/Data"

const TeamSection = () => {
  return (
    <TeamWrapper id="team">
      <TeamContainer>
        <TopLine>Team sprinto </TopLine>
        <TeamCardContainer>
          {employees.map(employee => (
            <TeamCard key={employee.id}>
              <TeamImg src={employee.img} />
              <Heading> {employee.fullName} </Heading>
              <Title> {employee.title} </Title>
              <Delimiter></Delimiter>
              <Description> {employee.description} </Description>
            </TeamCard>
          ))}
        </TeamCardContainer>
      </TeamContainer>
    </TeamWrapper>
  )
}

export default TeamSection
