import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsGlobe2, BsTelegram } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* if no tg link present ignore */}
        {props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        )}
        
        {/* if no gh link present ignore */}
        {props.tgLink && (
        <Button variant="primary" href={props.tgLink} target="_blank">
          <BsTelegram /> &nbsp;
          {"Telegram"}
        </Button>
        )}

        {/* if website link not present */}
        {!props.ghLink && !props.tgLink && (
        <Button variant="primary" href={props.wsLink} target="_blank">
          <BsGlobe2 /> &nbsp;
          {"Website"}
        </Button>
        )}

        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
