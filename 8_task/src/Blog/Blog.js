import React from "react";
import Post from "./Post";
import posts from "../postdata";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Blog = () => {
  let match = useRouteMatch();
  const post = posts;
  const postList = post.map((post) => {
    return (
      <Col>
        <Card style={{ width: "20rem" }} key={post.id}>
          <Card.Img variant="top" src={post.source} alt={post.title} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.author}</Card.Text>
            <Card.Text>{post.content}</Card.Text>
            <Button variant="outline-info">
              <Link to={`${match.url}/${post.title}`}>Read More</Link>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <Container style={{ paddingTop: "1rem" }}>
      <Row>
        <Switch>
          <Route path="/blog/:postId">
            <Post />
          </Route>
          <Route path={match.path}>{postList}</Route>
        </Switch>
      </Row>
    </Container>
  );
};
export default Blog;
