import React from "react"
import styled from "styled-components"

const Footer = ({ children }) => {
  const links = [
    {
      label: "Home"
    },
    {
      label: "Courses"
    },
    {
      label: "Licenses"
    },
    {
      label: "Jobs"
    },
    {
      label: "About"
    },
    {
      label: "Contact"
    },
    {
      label: "Subscribe"
    },
    {
      label: "Workshops"
    },
  ];

  return (
    <FooterGroup>
      <Text>“Prototype and build apps with React for Designers. by @RenM”</Text>
      <Button>Tweet</Button>
      <LinkGroup>
        {links.map((link, index) => (
          <a key={index} href={link.label}>{link.label}</a>
        ))}
      </LinkGroup>
      <Copyright>React for Designers by Ren Mission built with React, Gatsby & Styled-Components <br /> © 2023 - Terms of Service - Privacy Policy</Copyright>
    </FooterGroup>
  )
}

export default Footer

const FooterGroup = styled.div`
  bacground: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 40px;
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`


const Button = styled.button`
  background: linear-gradient(93.96deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  margin: 0 auto;
  padding: 16px 60px;
  font-size: 24px;
  border: none;
  font-weight: 600;
  
`

const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    padding: 10px 20px
  }
`

const Copyright = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: #486791;
  text-align: center;
  font-size: 16px;

  @media (max-width: 640px) {
    max-width: 400px;
  }
`;
