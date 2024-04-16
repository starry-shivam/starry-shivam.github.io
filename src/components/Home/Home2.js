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
              I'm a self taught programmer and a computer science student from
              india, i love open source development and have contributed to lots
              of small and big open source projects in the last three years!
              <br />
              <br />
              I'm currently spending most of my time learning&nbsp;
              <i>
                <b className="purple">
                  Kotlin, Android development and UI/UX design.
                </b>
              </i>
              &nbsp;I'm also skilled in&nbsp;
              <i>
                <b className="purple">Python</b>
              </i>
              &nbsp;with a decent experience in building projects which interact
              with the&nbsp;
              <i>
                <b className="purple">internet</b>
              </i>
              &nbsp;via&nbsp;
              <i>
                <b className="purple">REST APIs</b>
              </i>
              &nbsp;and such.
              <br />
              <br />
              Apart from these I also like to play around with other languages
              like&nbsp;
              <i>
                <b className="purple">C/C++ & Java</b>
              </i>
              &nbsp;and discover new things along the way.
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
                  href="mailto://starry@krsh.dev"
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
