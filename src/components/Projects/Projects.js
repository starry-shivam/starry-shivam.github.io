import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import acutebot from "../../Assets/Projects/acutebot.png";
import superhero from "../../Assets/Projects/superhero.heif";
import myne from "../../Assets/Projects/myne.heif";
import greenstash from "../../Assets/Projects/greenstash.heif";
import bitgapps from "../../Assets/Projects/bitgapps.heif";
import fileutils from "../../Assets/Projects/fileutils.heif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myne}
              isBlog={false}
              title="Myne"
              description="An android app to download ebooks from Project Gutenberg, using GutenDex API in the backend."
              ghLink="https://github.com/Pool-Of-Tears/Myne"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greenstash}
              isBlog={false}
              title="GreenStash"
              description="An android app to help you plan and manage your savings goals easily and establish the habit of saving money."
              ghLink="https://github.com/Pool-Of-Tears/GreenStash"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitgapps}
              isBlog={false}
              title="BitGapps"
              description="A Custom Google Apps Package which contain Minimal, But has all the required Google Applications to get Google Services functionality."
              wsLink="https://bitgapps.io/polaris.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fileutils}
              isBlog={false}
              title="FilteUtils"
              description="Small library to get file path from most kinds of content Uri in Android. For example: internal/external storage Uri, Google Drive uri, Google Photos Uri, WhatsApp files Uri and more!"
              ghLink="https://github.com/starry-shivam/FileUtils"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superhero}
              isBlog={false}
              title="Superhero Quotes API"
              description="Restful JSON API consisting huge collection of Marvel & DC SuperHeros and Supervillains quotes!"
              ghLink="https://github.com/Pool-Of-Tears/SuperHero-Quotes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acutebot}
              isBlog={false}
              title="αcutєвσt"
              description="Modular telegram bot to get information about your favourite anime, movies, and TV shows."
              tgLink="https://t.me/acutebot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
