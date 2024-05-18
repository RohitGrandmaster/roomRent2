import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cardsubmit from "../Handle/Cardsubmit";
import { useNavigate } from "react-router-dom";

function Cardformat() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoginData = localStorage.getItem("isLogin");
    console.log(isLoginData);
    if (isLoginData == null) {
      navigate("/logout");
    }
  }, []);

  const [value, setValue] = useState({
    roomNumber: "",
    roomRentStartDateMonth: "",
    roomRentAmount: "",
    roomOwnerName: "",
    roomOwnerContactNumber: "",
    roomOwnerAddharNumber: "",
    lastMonthBijliBillAmount: "",
    totalBijliNumberTillToday: "",
    bijliBillAmountToPay: "",
    roomRentPaidTillMonth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  useEffect(() => {
    const calculateTotalBill = () => {
      if (value.lastMonthBijliBillAmount && value.totalBijliNumberTillToday) {
        const totalBill =
          parseInt(value.lastMonthBijliBillAmount) +
          parseInt(value.totalBijliNumberTillToday);
        setValue((prevValue) => ({
          ...prevValue,
          bijliBillAmountToPay: totalBill.toString(),
        }));
      }
    };

    calculateTotalBill();
  }, [value.lastMonthBijliBillAmount, value.totalBijliNumberTillToday]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Cardsubmit(value);
      setValue({
        roomNumber: "",
        roomRentStartDateMonth: "",
        roomRentAmount: "",
        roomOwnerName: "",
        roomOwnerContactNumber: "",
        roomOwnerAddharNumber: "",
        lastMonthBijliBillAmount: "",
        totalBijliNumberTillToday: "",
        bijliBillAmountToPay: "",
        roomRentPaidTillMonth: "",
      });
      navigate("/");
    } catch (error) {
      // Error handling, if needed
    }
  };

  return (
    <div>
      <Card style={{ width: "48rem" }} className=" border-dark border-2">
        <Card.Body>
          <Form>
            <Form.Group className="row">
              <Form.Label column sm="4" style={{ fontWeight: "bold" }}>
                Room Number
              </Form.Label>
              <div className="col">
                <Form.Control
                  type="number"
                  placeholder="Enter room number"
                  name="roomNumber"
                  value={value.roomNumber}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <Form.Label column sm="4" style={{ fontWeight: "bold" }}>
                Room Rent Start Date Month
              </Form.Label>
              <div className="col">
                <Form.Control
                  type="date"
                  placeholder="Enter room rent start date"
                  name="roomRentStartDateMonth"
                  value={value.roomRentStartDateMonth}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <Form.Label column sm="4" style={{ fontWeight: "bold" }}>
                Room Rent Amount
              </Form.Label>
              <div className="col">
                <Form.Control
                  type="number"
                  placeholder="Enter room rent amount"
                  name="roomRentAmount"
                  value={value.roomRentAmount}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <Form.Label column sm="4" style={{ fontWeight: "bold" }}>
                Room Owner Name
              </Form.Label>
              <div className="col">
                <Form.Control
                  type="text"
                  placeholder="Enter room owner name"
                  name="roomOwnerName"
                  value={value.roomOwnerName}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <Form.Label column sm="4" style={{ fontWeight: "bold" }}>
                Room Owner Contact Number
              </Form.Label>
              <div className="col">
                <Form.Control
                  type="number"
                  placeholder="Enter room owner contact number"
                  name="roomOwnerContactNumber"
                  value={value.roomOwnerContactNumber}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <Form.Label column sm="4" style={{ fontWeight: "bold" }}>
                Room Owner Addhar Number
              </Form.Label>
              <div className="col">
                <Form.Control
                  type="number"
                  placeholder="Enter room owner Addhar number"
                  name="roomOwnerAddharNumber"
                  value={value.roomOwnerAddharNumber}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <Form.Label column sm="4" style={{ fontWeight: "bold" }}>
                Last Month Bijli Bill Amount
              </Form.Label>
              <div className="col">
                <Form.Control
                  type="number"
                  placeholder="Enter last month's bijli bill amount"
                  name="lastMonthBijliBillAmount"
                  value={value.lastMonthBijliBillAmount}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <Form.Label column sm="4" style={{ fontWeight: "bold" }}>
                Total Bijli Number Till Today
              </Form.Label>
              <div className="col">
                <Form.Control
                  type="number"
                  placeholder="Enter total bijli number till today"
                  name="totalBijliNumberTillToday"
                  value={value.totalBijliNumberTillToday}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <Form.Label column sm="4" style={{ fontWeight: "bold" }}>
                Bijli Bill Amount To Pay
              </Form.Label>
              <div className="col">
                <Form.Control
                  type="text"
                  placeholder="Bijli bill amount to pay"
                  name="bijliBillAmountToPay"
                  value={value.bijliBillAmountToPay}
                  readOnly
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <Form.Label column sm="4" style={{ fontWeight: "bold" }}>
                Room Rent Paid Till Month
              </Form.Label>
              <div className="col">
                <Form.Control
                  type="date"
                  placeholder="Enter room rent paid till month"
                  name="roomRentPaidTillMonth"
                  value={value.roomRentPaidTillMonth}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <div className="row justify-content-center mt-3">
              <div className="col-4">
                <Button
                  className="bg-blue-600"
                  variant="primary"
                  type="submit"
                  size="sm"
                  block
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardformat;
