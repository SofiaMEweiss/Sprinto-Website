import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItem, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink}
from './FooterElements'

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItem>
							<FooterLinkTitle> About us </FooterLinkTitle>
								<FooterLink to="/signin"> How it works</FooterLink>
								<FooterLink to="/signin"> Testimonials</FooterLink>
								<FooterLink to="/signin"> Careers</FooterLink>
								<FooterLink to="/signin"> Investors</FooterLink>
								<FooterLink to="/signin"> Terms of service</FooterLink>
							
						</FooterLinkItem>
						<FooterLinkItem>
							<FooterLinkTitle> About us </FooterLinkTitle>
								<FooterLink to="/signin"> How it works</FooterLink>
								<FooterLink to="/signin"> Testimonials</FooterLink>
								<FooterLink to="/signin"> Careers</FooterLink>
								<FooterLink to="/signin"> Investors</FooterLink>
								<FooterLink to="/signin"> Terms of service</FooterLink>
							
						</FooterLinkItem>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItem>
							<FooterLinkTitle> About us </FooterLinkTitle>
								<FooterLink to="/signin"> How it works</FooterLink>
								<FooterLink to="/signin"> Testimonials</FooterLink>
								<FooterLink to="/signin"> Careers</FooterLink>
								<FooterLink to="/signin"> Investors</FooterLink>
								<FooterLink to="/signin"> Terms of service</FooterLink>
							
						</FooterLinkItem>
						<FooterLinkItem>
							<FooterLinkTitle> About us </FooterLinkTitle>
								<FooterLink to="/signin"> How it works</FooterLink>
								<FooterLink to="/signin"> Testimonials</FooterLink>
								<FooterLink to="/signin"> Careers</FooterLink>
								<FooterLink to="/signin"> Investors</FooterLink>
								<FooterLink to="/signin"> Terms of service</FooterLink>
							
						</FooterLinkItem>
					</FooterLinksWrapper>
				</FooterLinksContainer>
					<SocialMedia>
						<SocialMediaWrap>
							<SocialLogo to='/'></SocialLogo>
							<WebsiteRights>Sprinto © {new Date().getFullYear()}All right reserved.</WebsiteRights>
							<SocialIcons>
								<SocialIconLink href="//www.linkedin.com/company/sprinto/about/" target="_blank" aria-label="Linkedin">
									<FaLinkedin/>
								</SocialIconLink>
							</SocialIcons>
						</SocialMediaWrap>
					</SocialMedia>

			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer;