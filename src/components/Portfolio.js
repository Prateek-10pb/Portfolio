import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 20px;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 100px 0;
  background: #f2f2f2;
`;

const HeroHeading = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const HeroSubheading = styled.p`
  font-size: 24px;
  color: #888;
`;

const AboutSection = styled.section`
  padding: 100px 0;
`;

const AboutHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const AboutContent = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #555;
`;

const ServicesSection = styled.section`
  padding: 100px 0;
  background: #f2f2f2;
`;

const ServicesHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  list-style: none;
`;

const ServiceItem = styled.li`
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ServiceIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const ContactSection = styled.section`
  padding: 100px 0;
`;

const ContactHeading = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background: #333;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Footer = styled.footer`
  padding: 20px 0;
  text-align: center;
  background: #333;
  color: #fff;
`;

const FooterText = styled.p`
  font-size: 14px;
`;

const Portfolio = () => {
  return (
    <Container>
      <Navbar>
        <Logo href="/">My Portfolio</Logo>
        <Menu>
          <MenuItem><a href="#about">About</a></MenuItem>
          <MenuItem><a href="#services">Services</a></MenuItem>
          <MenuItem><a href="#contact">Contact</a></MenuItem>
        </Menu>
      </Navbar>

      <HeroSection>
        <HeroHeading>Welcome to My Portfolio</HeroHeading>
        <HeroSubheading>Showing off my amazing work</HeroSubheading>
      </HeroSection>

      <AboutSection id="about">
        <AboutHeading>About Me</AboutHeading>
        <AboutContent>Hi, I am web developer and here i developed my own portfolio to express myself more in the coding area.</AboutContent>
      </AboutSection>

      <ServicesSection id="services">
        <ServicesHeading>My Services</ServicesHeading>
        <ServicesList>
          <ServiceItem>
            <ServiceIcon>Icon 1</ServiceIcon>
            <ServiceTitle>Web Design</ServiceTitle>
          <ServiceDescription>Here Icon 1 is present u can see it and it is web design.</ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>Icon 2</ServiceIcon>
            <ServiceTitle>Web Development</ServiceTitle>
            <ServiceDescription>Here Icon 2 is present u can see it and it is web development.</ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>Icon 3</ServiceIcon>
            <ServiceTitle>Graphic Design</ServiceTitle>
            <ServiceDescription>Here Icon 3 is present u can see it and it is graphic design.</ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceIcon>Icon 4</ServiceIcon>
            <ServiceTitle>Mobile App Development</ServiceTitle>
            <ServiceDescription>Here Icon 4 is present u can see it and it is mobile app development.</ServiceDescription>
          </ServiceItem>
        </ServicesList>
      </ServicesSection>

      <ContactSection id="contact">
        <ContactHeading>Contact Me</ContactHeading>
        <ContactForm>
          <FormField>
            <Label>Name</Label>
            <Input type="text" />
          </FormField>
          <FormField>
            <Label>Email</Label>
            <Input type="email" />
          </FormField>
          <FormField>
            <Label>Message</Label>
            <TextArea rows="5"></TextArea>
          </FormField>
          <FormField>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </FormField>
        </ContactForm>
      </ContactSection>

      <Footer>
        <FooterText>&copy; 2023 My Portfolio. All rights reserved.</FooterText>
      </Footer>
    </Container>
  );
};

export default Portfolio;
