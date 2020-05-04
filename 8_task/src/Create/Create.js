import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Create = () => {
  return (
    <Form style={{ width: "50%", paddingLeft: "2rem", paddingTop: "2rem" }}>
      <Form.Group controlId="formBasicName">
        <Form.Label style={{ fontSize: "1.5rem" }}>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{ fontSize: "1.5rem" }}>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{ fontSize: "1.5rem" }}>
          Write content here
        </Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Create;
