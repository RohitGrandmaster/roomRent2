import { roomData } from "../Models/dataTypes.mjs";

const editOwner = async (req, res) => {
  try {
    const id = req.params.id;
    const room = await roomData.findByPk(id);

    console.log(id, room);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    await room.update(req.body);

    res.status(200).json({ message: "Room  edited updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update room" });
  }
};
export default editOwner;
