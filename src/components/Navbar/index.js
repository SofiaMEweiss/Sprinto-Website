import React, { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { animateScroll as scroll } from "react-scroll"
import Logo from "../../images/logo.svg"
import {
  NavWrapper,
  NavbarContainer,
  NavLogoContainer,
  LogoIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  //Om fönstret på Y led blir större eller lika med 80px så uppdateras state på scrollNav.
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      {" "}
      {/* För att alla ikoner ska få en viss färg */}{" "}
      <IconContext.Provider value={{ color: "#000" }}>
        <NavWrapper scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogoContainer to="/" onClick={toggleHome}>
              <LogoIcon src={Logo} />{" "}
            </NavLogoContainer>{" "}
            <MobileIcon onClick={toggle}>
              <FaBars size={28} />{" "}
            </MobileIcon>{" "}
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
                  Om oss{" "}
                </NavLinks>{" "}
              </NavItem>{" "}
              <NavItem>
                <NavLinks
                  to="team"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Teamet{" "}
                </NavLinks>{" "}
              </NavItem>{" "}
            </NavMenu>{" "}
          </NavbarContainer>{" "}
        </NavWrapper>{" "}
      </IconContext.Provider>{" "}
    </>
  )
}

export default Navbar
