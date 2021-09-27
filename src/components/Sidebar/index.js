import React from "react"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements"

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Om oss
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            Teamet
          </SidebarLink>
          <SidebarLink to="focus" onClick={toggle}>
            Vårt fokus
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Jobba hos oss
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signup">Jobba hos oss</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
