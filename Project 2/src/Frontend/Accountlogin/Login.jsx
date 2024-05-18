import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Email, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../Images/backGroundImage";
import pic2 from "../Images/pic2.jpg";
import pic4 from "../Images/pic4.jpg";
import pic3 from "../Images/pic3.jpg";
import pic5 from "../Images/pic5.jpg";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
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
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
      const data = await response.json();
      console.log("Response data:", data); // Log the response data
      if (data.error) {
        setErrorMessage("Wrong email or password.");
      } else {
        setErrorMessage("");
        alert("Login successful");
        localStorage.setItem("isLogin", "true");

        navigate("/header");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to login. Please try again later.");
    }
  };
  useEffect(() => {
    const images = [pic2, pic3, pic4, pic5];
    let index = 0;

    const interval = setInterval(() => {
      // Change the image URL here
      setImageUrl(images[index]);
      index = (index + 1) % images.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BackgroundImage imageUrl={imageUrl} />
      {/* <div className="flex justify-center items-center bg-pink-200 p-4">
        <h1 className="text-4xl font-extrabold text-green-600">
          Login and Signup
        </h1>
      </div> */}
      <div className="absolute right-96 top-40">
        <div className="w-80 h-80 p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-600">
          <h2 className="text-xl font-bold mb-4 ">Login</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
