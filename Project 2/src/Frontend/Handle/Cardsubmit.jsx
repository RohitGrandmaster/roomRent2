const Cardsubmit = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/saveroom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // console.log("response", response);
    if (response.ok) {
      const data = await response.json();
      console.log("Response data:", data);
      alert("Data saved successfully");
    } else {
      return data; // Optional: Return the data if needed
      alert("Failed to save data. Please try again later.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to save data in catch block. Please try again later.");
    throw error; // Optional: Throw the error if needed
  }
};

export default Cardsubmit;
