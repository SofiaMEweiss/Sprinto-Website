import React from "react"
import Video from "../../videos/video.mp4"
import {
  HeaderWrapper,
  HeaderBgContainer,
  HeaderVideoBg,
  HeaderContentContainer,
  Heading,
} from "./HeaderElements"

export const HeaderSection = () => {
  return (
    <HeaderWrapper id="home">
      <HeaderBgContainer>
        <HeaderVideoBg
          autoPlay
          playsinline
          muted
          loop
          src={Video}
          type="video/mp4"
        />
      </HeaderBgContainer>
      <HeaderContentContainer>
        <Heading> Vi utvecklar teknik för människor </Heading>
      </HeaderContentContainer>
    </HeaderWrapper>
  )
}
