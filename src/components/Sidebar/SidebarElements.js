import styled from "styled-components"
import { Link as LinkS } from "react-scroll"
import { FaTimes } from "react-icons/fa"

export const SidebarWrapper = styled.aside`
  display: grid;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  //För att den ska lägga sig ovanpå alltihopa.Så vart man än klickar så ska det vara där.
  z-index: 999;
  background: #373e57;
  transition: 0ms.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`
export const IconContainer = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
`

export const CloseIcon = styled(FaTimes)`
  color: #eeeae7;
`

export const SidebarMenuContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(2, 60px);
  } ;
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eeeae7;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  transition: 0ms.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`
