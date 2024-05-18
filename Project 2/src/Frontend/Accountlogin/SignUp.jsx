import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Email, Lock } from "@mui/icons-material";

function SignUp() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });

      if (!response.ok) {
        throw new Error("Failed to signup");
      }

      alert("Signup successful");
      setInputValue({ email: "", password: "" }); // Clear input values after signup
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="absolute left-96 top-40">
      <div className="w-80 h-80 p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-600">
        <h2 className="text-xl font-bold mb-4 ">Signup</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <Email /> Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={inputValue.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <Lock /> Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={inputValue.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="w-full bg-blue-600"
            variant="primary"
            type="submit"
          >
            Signup
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
