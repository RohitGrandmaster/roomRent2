import React, { useState, useEffect } from "react";
import BackgroundImage from "../Images/backGroundImage";
import { Delete, Edit } from "@mui/icons-material";
import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
import pic4 from "../Images/pic4.jpg";
import pic5 from "../Images/pic5.jpg";
import handleDelete from "../Handle/Handledelete";
import EditForm from "../Handle/Editform";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState(pic1);
  const [editItemId, setEditItemId] = useState(null);

  const navigate = useNavigate();

  const fetchRoomData = async () => {
    try {
      const response = await fetch("http://localhost:3000/roomfetch");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      if (fetchedData.length === 0) {
        alert("No records found. Please create a record.");
        setData(fetchedData);
      }
    } catch (error) {
      if (error.message === "Failed to fetch data") {
        alert("Failed to fetch data. Please create a record.");
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const isLoginData = localStorage.getItem("isLogin");

    if (isLoginData == "true") {
      fetchRoomData();
    } else {
      alert("please login first");
      navigate("/logout");
    }
  }, []);

  useEffect(() => {
    const images = [pic1, pic2, pic3, pic4, pic5];
    let index = 0;

    const interval = setInterval(() => {
      setImageUrl(images[index]);
      index = (index + 1) % images.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const roomDelete = async (id) => {
    await handleDelete(id, fetchRoomData);
  };

  const handleEdit = (id) => {
    setEditItemId(id);
  };

  const handleFormSave = async (id, formData) => {
    try {
      const response = await fetch(`http://localhost:3000/roomupdate/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      alert("data update successfully");
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      setEditItemId(null); // Clear the edit state
      fetchRoomData(); // Refetch data to update the UI
    } catch (error) {
      console.error(error);
    }
  };

  let inputBoxStyle = {
    border: "1px solid grey",
    padding: "-1px",
    marginBottom: "1px",
    fontWeight: "bold",
  };

  return (
    <div>
      <BackgroundImage imageUrl={imageUrl} />
      <div className="container" style={{ padding: "20px" }}>
        <div
          className="card-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {data &&
            data.map((room, index) => (
              <div
                className="card"
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                {editItemId === room.id ? (
                  <EditForm
                    initialFormData={room}
                    onSave={(formData) => handleFormSave(room.id, formData)}
                  />
                ) : (
                  <div className="card-body" style={{ padding: "10px" }}>
                    <p style={inputBoxStyle}>ID: {room.id}</p>
                    <p style={inputBoxStyle}>Room Number: {room.roomNumber}</p>
                    <p style={inputBoxStyle}>Owner Name: {room.ownerName}</p>
                    <p style={inputBoxStyle}>Rent Amount: {room.rentAmount}</p>
                    <p style={inputBoxStyle}>
                      Owner Contact: {room.ownerContactNumber}
                    </p>
                    <p style={inputBoxStyle}>
                      Owner Aadhar Number: {room.ownerAddharNumber}
                    </p>
                    <p style={inputBoxStyle}>
                      Rent Start Date:{" "}
                      {new Date(room.rentStartDate).toLocaleDateString()}
                    </p>
                    <p style={inputBoxStyle}>
                      Previous Month Bijli Bill: {room.lastMonthBijliBill}
                    </p>
                    <p style={inputBoxStyle}>
                      Total Bijli Till Date: {room.totalBijliTillDate}
                    </p>
                    <p style={inputBoxStyle}>
                      Bijli Bill Amount To Pay: {room.bijliBillAmountToPay}
                    </p>
                    <p style={inputBoxStyle}>
                      Rent Paid Till Month:{" "}
                      {new Date(room.rentPaidTillMonth).toLocaleDateString()}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button onClick={() => handleEdit(room.id)}>
                        <Edit sx={{ color: "#4caf50" }} /> Edit
                      </button>
                      <button onClick={() => roomDelete(room.id)}>
                        <Delete sx={{ color: "#ff0000" }} /> Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
