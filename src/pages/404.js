import * as React from "react"
// import { GlobalStyles } from "../components/GlobalStyles"
import styled from "styled-components"

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #373e57;
`

const Content = styled.p`
  text-align: center;
  font-family: "Century Gothic W05 Regular";
  color: #fff;
  font-size: 2.2rem;
`

// const Background = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: var(--primary-color);
// `

// const Content = styled.p`
//   text-align: center;
//   color: var(--tertiary-color);
//   font-size: var(--heading-font-size);
// `

const NotFoundPage = () => {
  return (
    <Background>
      <Content>
        Ojdå, sidan kan inte hittas.{<br />}
        {<br />} Prova att ladda om!
      </Content>
    </Background>
  )
}

export default NotFoundPage
