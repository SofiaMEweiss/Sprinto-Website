import * as React from "react"
import { useState } from "react"
import { GlobalStyles } from "../components/GlobalStyles"
// import styled from "styled-components"

// import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { HeaderSection } from "../components/HeaderSection"
import AboutSection from "../components/AboutSection"
import { aboutObj } from "../components/AboutSection/Data"
import TeamSection from "../components/TeamSection"
import Footer from "../components/Footer"

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    //   <Layout>
    <div>
      <GlobalStyles />
      <Seo title="Sprinto" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeaderSection />
      <AboutSection {...aboutObj} />
      <TeamSection /> {/* </Layout> */}
      <Footer />
    </div>
  )
}

export default IndexPage
