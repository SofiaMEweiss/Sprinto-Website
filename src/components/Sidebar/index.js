import React from "react"
import { IconContext } from "react-icons/lib"
import {
  SidebarWrapper,
  IconContainer,
  CloseIcon,
  SidebarMenuContainer,
  SidebarLink,
} from "./SidebarElements"

function Sidebar({ isOpen, toggle }) {
  return (
    <IconContext.Provider value={{ color: "#eeeae7" }}>
      <SidebarWrapper isOpen={isOpen} onClick={toggle}>
        <IconContainer onClick={toggle}>
          <CloseIcon size={32} />
        </IconContainer>
        <SidebarMenuContainer>
          <SidebarLink to="about" onClick={toggle}>
            Om oss
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            Teamet
          </SidebarLink>
        </SidebarMenuContainer>
      </SidebarWrapper>
    </IconContext.Provider>
  )
}

export default Sidebar
