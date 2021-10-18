import * as React from "react"
import { useState, useEffect } from "react"
import { GlobalStyles } from "../components/GlobalStyles"
// import styled from "styled-components"
import FadeLoader from "react-spinners/FadeLoader";

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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    //   <Layout>
    <div>
      <GlobalStyles />
      <Seo title="Home" />
      {
        loading ? 
        <FadeLoader
        color={"#F7A58F"}
        loading={loading} 
        />

        : 
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeaderSection />
        <AboutSection {...aboutObj} />
        <TeamSection /> {/* </Layout> */}
        <Footer />
        </>
      }
     
    </div>
  )
}

export default IndexPage
