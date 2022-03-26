import React from "react";
import { Button, Card } from "react-bootstrap";

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <Card style={{ width: "18rem", height: "600px" }}>
      <Card.Img variant="top" src={movie.posterUrl} style={{ height: "40%" }} />
      <Card.Body>
        <Card.Title> {movie.title} </Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
