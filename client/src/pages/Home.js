import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/BookSearchForm";
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md">
          <CreatePostForm />
        </Col>
      </Row>
      <Col size="sm-12">
        <PostsList />
      </Col>
    </Container>
  );
};

export default Home;
