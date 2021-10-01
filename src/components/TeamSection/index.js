import React from "react"
import ProfilePic from "../../images/profile.svg"
import {
  TeamContainer,
  TeamH1,
  TeamWrapper,
  TeamCard,
  TeamH2,
  TeamP,
  TeamIcon,
} from "./TeamElements"

const TeamSection = () => {
  return (
    <TeamContainer id="team">
      <TeamH1>Team</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamIcon src={ProfilePic} />
          <TeamH2>Namn</TeamH2>
          <TeamP>Fredrik gillar</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={ProfilePic} />
          <TeamH2>Namn</TeamH2>
          <TeamP>Beskrivning</TeamP>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  )
}

export default TeamSection
