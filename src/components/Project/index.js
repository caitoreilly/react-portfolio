import React from "react";
import Card from "react-bootstrap/Card";

function Project({ id, title, image, text, appLink, repoLink }) {
  return (
    <Card className="card" style={{ width: "24rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Link href={appLink}>Deployed Application</Card.Link>
        <p><Card.Link href={repoLink}>GitHub Repository</Card.Link></p>
      </Card.Body>
    </Card>
  );
}

export default Project;
