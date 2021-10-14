import React from "react"
// import { useState, useEffect } from "react"
import {
  TeamWrapper,
  TeamContainer,
  TopLine,
  TeamCardContainer,
  TeamCard,
  TeamImg,
  TeamH2,
  TeamH3,
  Delimiter,
  TeamP,
} from "./TeamElements"
import { employees } from "../TeamSection/Data"

const TeamSection = () => {
  //   const [newColor, setNewColor] = useState(false)

  //   const switchColor = () => {
  //     if (employees.id == 1) {
  //       setNewColor(true)
  //     }
  //   }

  //   useEffect(() => {
  //     switchColor()
  //   }, [])

  //   const colors = ["#373e57", "#94e7d3"]

  return (
    <TeamWrapper id="team">
      <TeamContainer>
        <TopLine>Team sprinto </TopLine>
        <TeamCardContainer>
          {employees.map(employee => (
            <TeamCard key={employee.id}>
              <TeamImg src={employee.img} />{" "}
              <TeamH2> {employee.fullName} </TeamH2>
              <TeamH3> {employee.title} </TeamH3>
              {/* <Delimiter newColor={newColor}></Delimiter> */}
              {/* <Delimiter
                background-color={index % 2 ? colors[0] : colors[1]}
              ></Delimiter> */}
              <Delimiter></Delimiter>
              <TeamP> {employee.description} </TeamP>
            </TeamCard>
          ))}
        </TeamCardContainer>{" "}
      </TeamContainer>
    </TeamWrapper>
  )
}

export default TeamSection
