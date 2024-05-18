import { roomData } from "../Models/dataTypes.mjs";

const roomCreate = async (req, res) => {
  const {
    roomNumber,
    roomRentStartDateMonth,
    roomRentAmount,
    roomOwnerName,
    roomOwnerContactNumber,
    roomOwnerAddharNumber,
    lastMonthBijliBillAmount,
    totalBijliNumberTillToday,
    bijliBillAmountToPay,
    roomRentPaidTillMonth,
  } = req.body;

  try {
    const newRoom = await roomData.create({
      roomNumber: roomNumber,
      rentStartDate: roomRentStartDateMonth,
      rentAmount: roomRentAmount,
      ownerName: roomOwnerName,
      ownerContactNumber: roomOwnerContactNumber,
      ownerAddharNumber: roomOwnerAddharNumber,
      lastMonthBijliBill: lastMonthBijliBillAmount,
      totalBijliTillDate: totalBijliNumberTillToday,
      bijliBillAmountToPay: bijliBillAmountToPay,
      rentPaidTillMonth: roomRentPaidTillMonth,
    });

    // console.log(newRoom);
    res.status(201).json(newRoom);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export default roomCreate;
