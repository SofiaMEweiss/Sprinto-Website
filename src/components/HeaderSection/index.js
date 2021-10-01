import React from "react"

import Video from "../../videos/video.mp4"

import {
  HeaderWrapper,
  HeaderBgContainer,
  HeaderVideoBg,
  HeaderContentContainer,
  HeaderH1,
} from "./HeaderElements"

export const HeaderSection = () => {
  return (
    <HeaderWrapper id="home">
      <HeaderBgContainer>
        <HeaderVideoBg autoPlay muted loop src={Video} type="video/mp4" />
      </HeaderBgContainer>
      <HeaderContentContainer>
        <HeaderH1>Vi utvecklar teknik för människor</HeaderH1>
      </HeaderContentContainer>
    </HeaderWrapper>
  )
}
