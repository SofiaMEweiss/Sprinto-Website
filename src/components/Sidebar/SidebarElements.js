import styled from "styled-components"
import { Link as LinkScroll } from "react-scroll"
import { FaTimes } from "react-icons/fa"

export const SidebarWrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  transition: 0.3s ease-in-out;
  color: var(--tertiary-color);
`
export const IconContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`

export const CloseIcon = styled(FaTimes)``

export const SidebarMenuContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(2, 60px);
  } ;
`

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--subheading-font-size);
  font-weight: bold;
  text-decoration: none;
  list-style: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: var(--background-color);
    border-bottom: 3px solid var(--cta-color);
    transition: 0.2s ease-in-out;
  }
`
