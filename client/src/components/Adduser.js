import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adduser } from "../Redux/action/useraction";
const Adduser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adduser({ name, email }), navigate("/all"));
  };
  return (
    <div>
      <Form
        style={{
          width: "20rem",
          margin: " 4rem auto ",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Button variant="warning" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Adduser;
