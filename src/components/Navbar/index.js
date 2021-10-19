import React, { useState, useEffect } from "react"
// import { FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { animateScroll as scroll } from "react-scroll"
import Logo from "../../images/nav-img-logo.svg"
import {
  NavWrapper,
  NavbarContainer,
  NavLogoLink,
  LogoIcon,
  MobileIconContainer,
  MobileMenuIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"

const Navbar = ({ toggle }) => {
  const [isNavScrolled, setIsNavScrolled] = useState(false)

  //Om fönstret på Y led blir större eller lika med 80px så uppdateras state på isNavScrolled.
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setIsNavScrolled(true)
    } else {
      setIsNavScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  //När man klickar på loggan så kommer man högst upp på sidan.
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      {/* För att alla ikoner ska få en viss färg */}
      <IconContext.Provider value={{ color: "#000" }}>
        <NavWrapper isNavScrolled={isNavScrolled}>
          <NavbarContainer>
            <NavLogoLink to="/" onClick={scrollToTop}>
              <LogoIcon src={Logo} />
            </NavLogoLink>
            <MobileIconContainer onClick={toggle}>
              <MobileMenuIcon size={28} />
            </MobileIconContainer>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Om oss
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="team"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Teamet
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </NavWrapper>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
