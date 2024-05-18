const handleDelete = async (id, fetchRoomData) => {
  try {
    const response = await fetch(`http://localhost:3000/rooms/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete room: ${response.statusText}`);
    }
    // Refresh the data after successful deletion
    fetchRoomData();
    // Show alert
    window.alert("Room deleted successfully");
  } catch (error) {
    console.error(error);
  }
};
export default handleDelete;
