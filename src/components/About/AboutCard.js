import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Starry Shivam </span>
            from <span className="purple">India.</span>
            <br />I am a sophomore studying Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading novels
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you win, you live. If you lose, you die. If you don’t fight, you
            can’t win!"{" "}
          </p>
          <footer className="blockquote-footer">Eren Yaeger</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
