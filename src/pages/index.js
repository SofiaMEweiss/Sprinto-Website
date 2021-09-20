import * as React from "react"
import { GlobalStyles } from "../components/GlobalStyles"
import styled from "styled-components"

// import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"

const IndexPage = () => (
  //   <Layout>
  <div>
    <GlobalStyles />
    <Seo title="Home" />
    <Navbar />
    {/* </Layout> */}
  </div>
)

export default IndexPage
