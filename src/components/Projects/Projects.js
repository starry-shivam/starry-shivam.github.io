import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import acutebot from "../../Assets/Projects/acutebot.png";
import superhero from "../../Assets/Projects/superhero.png";
import myne from "../../Assets/Projects/myne.png";
import greenstash from "../../Assets/Projects/greenstash.png";

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
              description="Modular telegram bot to get information about your favourite anime, movies, and TV shows. "
              tgLink="https://t.me/acutebot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
