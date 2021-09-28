import * as React from "react"
import { useState } from "react"
import { GlobalStyles } from "../components/GlobalStyles"
// import styled from "styled-components"

// import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { HeroSection } from "../components/HeroSection"

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    //   <Layout>
    <div>
      <GlobalStyles />
      <Seo title="Home" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection/>
      {/* </Layout> */}
    </div>
  )
}

export default IndexPage
