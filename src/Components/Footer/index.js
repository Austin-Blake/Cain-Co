import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialLogo,
    SocialIconLink
} from './FooterElements'


export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap >
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Cain & Co.</SocialLogo>
                        <SocialIcons>
                        <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook" rel="noopener" >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram" rel="noopener" >
                            <FaInstagram />
                            </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter" rel="noopener" >
                        <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}
