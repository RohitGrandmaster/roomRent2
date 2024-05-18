import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const EditForm = ({ initialFormData, onSave }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSave = () => {
    onSave(formData);
  };

  let inputBoxStyle = {
    border: "2px solid grey",
    padding: "-1px",
    marginBottom: "1px",
    fontWeight: "bold",
  };

  let containerStyle = {
    backgroundColor: "white",
    borderRadius: "1px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "1px",
    margin: "1px",
  };

  return (
    <div style={containerStyle}>
      <label style={inputBoxStyle}>
        Room Number:
        <input
          type="Number"
          name="roomNumber"
          value={formData.roomNumber}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
        />
      </label>{" "}
      <br />
      <label style={inputBoxStyle}>
        Owner Name:
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <label style={inputBoxStyle}>
        Owner Contact Number:
        <input
          type="Number"
          name="ownerContactNumber"
          value={formData.ownerContactNumber}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <label style={inputBoxStyle}>
        Rent Amount:
        <input
          type="Number"
          name="rentAmount"
          value={formData.rentAmount}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <label style={inputBoxStyle}>
        Owner Addhar Number:
        <input
          type="Number"
          name="ownerAddharNumber"
          value={formData.ownerAddharNumber}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <label style={inputBoxStyle}>
        Rent Start Date:
        <input
          type="Date"
          name="rentStartDate"
          value={formData.rentStartDate}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <label style={inputBoxStyle}>
        Previous Month Bijli Bill:
        <input
          type="Number"
          name="lastMonthBijliBill"
          value={formData.lastMonthBijliBill}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <label style={inputBoxStyle}>
        Total Bijli Till Date:
        <input
          type="Number"
          name="totalBijliTillDate"
          value={formData.totalBijliTillDate}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <label style={inputBoxStyle}>
        Bijli Bill Amount To Pay:
        <input
          type="Number"
          name="bijliBillAmountToPay"
          value={formData.bijliBillAmountToPay}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <label style={inputBoxStyle}>
        Rent Paid Till Month:
        <input
          type="Date"
          name="rentPaidTillMonth"
          value={formData.rentPaidTillMonth}
          onChange={handleChange}
          style={{ marginLeft: "10px" }}
        />
      </label>
      {/* Add more fields as needed */}
      <br />
      <Button
        className="bg-green-600"
        variant="success"
        onClick={handleFormSave}
        style={{ marginTop: "1px" }}
      >
        Save
      </Button>
    </div>
  );
};

export default EditForm;
