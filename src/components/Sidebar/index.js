import React from "react"
import {
  SidebarWrapper,
  IconContainer,
  CloseIcon,
  SidebarMenuContainer,
  SidebarLink,
} from "./SidebarElements"

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarWrapper isOpen={isOpen} onClick={toggle}>
      <IconContainer onClick={toggle}>
        <CloseIcon size={28} />
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
  )
}

export default Sidebar
