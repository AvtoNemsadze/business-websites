import React from "react";
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>PRODUCTS</Heading>
			<FooterLink>Visual Studio X</FooterLink>
			<FooterLink>Easy Content</FooterLink>
			<FooterLink>Drag And Drop</FooterLink>
			<FooterLink>Special Items</FooterLink>
		</Column>
		<Column>
			<Heading>RESOURCES</Heading>
			<FooterLink>Industries and tools</FooterLink>
			<FooterLink>Use cases</FooterLink>
			<FooterLink>Online evenet</FooterLink>
			<FooterLink>Nostrud exercitation</FooterLink>
		</Column>
		<Column>
			<Heading>COMPANY</Heading>
			<FooterLink>Diversity & inclusion</FooterLink>
			<FooterLink>Press</FooterLink>
			<FooterLink>About us</FooterLink>
			<FooterLink>Online communities</FooterLink>
		</Column>
		<Column>
        <Heading>SUPPORT</Heading>
			<FooterLink>Documentation</FooterLink>
			<FooterLink>Webinars</FooterLink>
			<FooterLink>Open-source</FooterLink>
			<FooterLink>Tutorials & guides</FooterLink>
		</Column>
		</Row>

        <Section>
            <Text>© 2022 Company. All rights reserved.</Text>
            <SocialIcons />
        </Section>
	</Container>
	</Box>
    );
}
export default Footer;


const Box = styled.div`
    background-color: rgb(9, 13, 24);
    padding-bottom: 2rem;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
    padding-top: 100px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
    grid-gap: 20px;


@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`

const FooterLink = styled.a`
    color: #7F04C1;
    color: grey;
    margin-bottom: 15px;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;

&:hover {
	color: #4F0378;
	transition: 200ms ease-in;
}
`

const Heading = styled.h3`
    font-size: 24px;
    color: #0dbd65;
    margin-bottom: 40px;
    font-weight: bold;
`

const Section = styled.div`
    padding-top: 2rem;
	text-align: center;

    @media (max-width: 850px) {
        text-align: center;
    }
`

const Text = styled.span`
    color: #5e818a;   
`