import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/Card"
import Wave from "../components/Wave"
import Cell from "../components/Cell"
import Seo from "../components/seo"
import Footer from "../components/Footer"
import LogoSketch from "../images/logo-sketch.png"
import LogoFigma from "../images/logo-figma.png"
import LogoFramer from "../images/logo-framer.png"
import LogoInvision from "../images/logo-invision.png"
import LogoReact from "../images/logo-react.png"
import LogoStudio from "../images/logo-studio.png"
import LogoSwift from "../images/logo-swift.png"
import LogoXcode from "../images/logo-xcode.png"
import Wallpaper from "../images/wallpaper.jpg"
import Wallpaper2 from "../images/wallpaper2.jpg"
import Wallpaper3 from "../images/wallpaper3.jpg"
import Wallpaper4 from "../images/wallpaper4.jpg"
import ReactLogo from "../images/logo-react.png"
import Section from "../components/Section"
import staticData from "../../staticData.json"
import styled from "styled-components"

const IndexPage = () => {
  const courseList = [
    {
      title: "React for Designers",
      text: "12 Sections",
      image: Wallpaper,
    },
    {
      title: "React Hooks",
      text: "6 Sections",
      image: Wallpaper4,
    },
    {
      title: "Advanced React Hooks",
      text: "12 Sections",
      image: Wallpaper2,
    },
    {
      title: "Next Js React Framework",
      text: "2 Sections",
      image: Wallpaper3,
    },
    {
      title: "React Basics",
      text: "1 Sections",
      image: Wallpaper,
    },
    {
      title: "React Js",
      text: "8 Sections",
      image: Wallpaper4,
    },
  ]

  const section = {
    title: "React for Designers",
    text: "Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify.",
    image: Wallpaper2,
    logo: ReactLogo,
  }

  return (
    <Layout>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Learn to <br /> design and code React apps
          </h1>
          <p>
            Complete courses about the best tools and design systems. Prototype
            and build apps with React
          </p>

          <a href="#">Watch the video</a>

          <div className="Logos">
            <img src={LogoSketch} width="50px"></img>
            <img src={LogoFigma} width="50px"></img>
            <img src={LogoInvision} width="50px"></img>
            <img src={LogoFramer} width="50px"></img>
            <img src={LogoReact} width="50px"></img>
            <img src={LogoSwift} width="50px"></img>
          </div>

          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2>11 courses, more comming</h2>
        <div className="CardGroup">
          {courseList.map((course, index) => (
            <Card
              key={index}
              title={course.title}
              text={course.text}
              image={course.image}
            />
          ))}
        </div>
      </div>

      <Section
        image={section.image}
        logo={section.logo}
        title={section.title}
        text={section.text}
      />

      <SectionCaption>12 Sections - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticData.cells.map((cell, index) => (
          <Cell key={index} title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

const SectionCaption = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`;

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
