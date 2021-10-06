import React from "react"
import ProfilePic from "../../images/profile.svg"
import {
  TeamWrapper,
  TeamW,
  TeamCard,
  TeamH2,
  TeamP,
  TeamIcon,
  TopLine,
  TeamContainer,
  TextContainer,
} from "./TeamElements"
import { employees } from "../TeamSection/Data"

const TeamSection = () => {
  return (
    <TeamWrapper id="team">
      <TeamContainer>
        <TextContainer>
          <TopLine>Team sprinto </TopLine>
        </TextContainer>
        <TeamW>
          {employees.map(employee => (
            <TeamCard>
              <TeamIcon src={ProfilePic} />{" "}
              <TeamH2> {employee.fullName} </TeamH2>
              <TeamP> {employee.title} </TeamP>
              <TeamP> {employee.description} </TeamP>
            </TeamCard>
          ))}
        </TeamW>{" "}
      </TeamContainer>
    </TeamWrapper>
  )
}

export default TeamSection
