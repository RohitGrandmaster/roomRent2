import { roomData } from "../Models/dataTypes.mjs";

const fetchOwner = async (req, res) => {
  try {
    const rooms = await roomData.findAll();
    res.status(200).json(rooms);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch rooms" });
  }
};

export default fetchOwner;
