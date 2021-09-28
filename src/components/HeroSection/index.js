import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement';

export const HeroSection = () => {
	const [hover, setHover] = useState(false)

	const onHover = () => {
		setHover(!hover)
	}

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay muted src={Video} type='video/mp4'/>
			</HeroBg>
			<HeroContent>
				<HeroH1> Utvecklar teknik för människor </HeroH1>
				<HeroP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis fringilla nunc, blandit efficitur enim. Curabitur pellentesque  </HeroP>
				<HeroBtnWrapper>
					<Button to="signup" onMouseEnter={onHover}onMouseLeave={onHover}
					primary='true'
					dark='true'
					big='true'
					fontBig='true'>
						Jobba hos oss {hover ? <ArrowForward /> : <ArrowRight/>}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}
