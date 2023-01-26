import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Shivam, a computer science student and self taught programmer
              from India
              <br />
              <br />
              I'm currently learning
              <i>
                <b className="purple">
                  {" "}
                  Kotlin, Android development and UI/UX design.{" "}
                </b>
              </i>
              <br />
              <br />I love open source development and have contributed to lots
              of open source projects in past few years, apart from my main
              coding languages &nbsp;
              <i>
                <b className="purple">Python</b>,&nbsp;
              </i>
              <i>
                <b className="purple">C and SQL.</b>&nbsp;
              </i>
              I play around with other programming languages and discover new
              things along the way.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing projects
              using <b className="purple"> self-developed APIs</b> and
              <i>
                <b className="purple"> Open Source Libraries & Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Flask and Android Jetpack Compose</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT</h1>
            <p>Get in touch with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/starry-shivam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/starry_shivam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/starryboi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto://krshivam24@proton.me"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
