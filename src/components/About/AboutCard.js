import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I'm Shivam, most of the things which matter are already
            there on the homepage :)
            <br />
            <br />
            <br />
            Apart from those here's some of my hobbies which i keep myself busy
            in my free time.
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
            Maybe there's only a dark road up ahead. But you still have to
            believe and keep going. Believe that the stars will light your path,
            even a little bit. Come on... Let's go on a journey!
          </p>
          <footer className="blockquote-footer">Kaori Miyazono</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
