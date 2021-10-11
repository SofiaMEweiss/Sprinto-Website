import React from "react"
// import { useState, useEffect } from "react"
import {
  TeamWrapper,
  TeamW,
  TeamCard,
  TeamH2,
  TeamP,
  Delimiter,
  TeamIcon,
  TopLine,
  TeamContainer,
  TextContainer,
  TeamH3,
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
        <TextContainer>
          <TopLine>Team sprinto </TopLine>
        </TextContainer>
        <TeamW>
          {employees.map(employee => (
            <TeamCard key={employee.id}>
              <TeamIcon src={employee.img} />{" "}
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
        </TeamW>{" "}
      </TeamContainer>
    </TeamWrapper>
  )
}

export default TeamSection
