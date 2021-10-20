import * as React from "react"
import { useState, useEffect } from "react"
import { GlobalStyles } from "../components/GlobalStyles"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { HeaderSection } from "../components/HeaderSection"
import AboutSection from "../components/AboutSection"
import { aboutObj } from "../components/AboutSection/Data"
import TeamSection from "../components/TeamSection"
import Footer from "../components/Footer"
import FadeLoader from "react-spinners/FadeLoader"

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <GlobalStyles />
      <Seo title="Sprinto - Vi utvecklar teknik för människor" />
      {loading ? (
        <FadeLoader color={"#F7A58F"} loading={loading} />
      ) : (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <HeaderSection />
          <AboutSection {...aboutObj} />
          <TeamSection />
          <Footer />
        </>
      )}
    </>
  )
}

export default IndexPage
