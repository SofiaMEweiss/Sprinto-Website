import styled from "styled-components"
import { Link as LinkGatsby } from "gatsby"
import { Link as LinkScroll } from "react-scroll"
import { FaBars } from "react-icons/fa"

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 80px;
  margin-top: -80px;
  background: ${({ isNavScrolled }) =>
    isNavScrolled ? "#fff" : "transparent"};
  opacity: ${({ isNavScrolled }) => (isNavScrolled ? "0.90" : "1")};

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1800px;
  width: 100%;
  z-index: 1;
  padding: 0 3em;

  @media screen and (max-width: 768px) {
    padding: 0 1.5em;
  }
`

export const NavLogoLink = styled(LinkGatsby)`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const LogoIcon = styled.img`
  @media screen and (max-width: 768px) {
    height: 30%;
  }
`

export const MobileIconContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 0.3em;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`

export const MobileMenuIcon = styled(FaBars)``

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80%;
  padding-left: 3em;
`

export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  height: 100%;
  color: #000;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #353434;
    transition: 0.2s ease-in-out;
  }
  &.active {
    border-bottom: 3px solid #f7a58f;
  }
`
