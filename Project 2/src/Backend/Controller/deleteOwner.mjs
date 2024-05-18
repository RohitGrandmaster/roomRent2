import { roomData } from "../Models/dataTypes.mjs";

const deleteOwner = async (req, res) => {
  const id = parseInt(req.params.id);

  console.log("ID:", id);

  try {
    const room = await roomData.findByPk(id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    await room.destroy();
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete room" });
  }
};

export default deleteOwner;
