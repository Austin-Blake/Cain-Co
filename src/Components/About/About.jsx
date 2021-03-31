import React from 'react';
import {Navbar} from '../Navbar/index'
import {
    AboutContainer,
    AboutH1,
    AboutP,
    AboutWrapper
} from './AboutElements'

export const About = () => {
    return (
        <>
        <Navbar/>
            <AboutContainer>
                <AboutWrapper>
                <AboutH1>Who We Are</AboutH1>
                <AboutP>We are in our 3rd year of providing quality merchandise at fair prices. We hope to add you to our list of loyal customers and friends from all over the world.</AboutP>
                <AboutP>We offer a great selection of Western Boots, Exotic Cowboy Boots, Work Boots, Casual Footwear, Western Wear, Western Accessories and Rugged Outdoor Wear.</AboutP>
                <AboutP>We invite you to stop in and check out our selection and if you can’t find what you’re looking for then be sure to ask a sales associate and we will try our best to find it for you.</AboutP>
                    <AboutH1>Thank you for being a loyal customer!</AboutH1>
            </AboutWrapper>
        </AboutContainer>
        </>
    )
}