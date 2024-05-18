import DataTypes from "sequelize";
import sequelize from "./databaseConnection.mjs";
// Define a model

// Define a model
const Userdata = sequelize.define("Usertables", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 255], // Minimum length of 6 characters
    },
  },
});

export default Userdata;

const roomData = sequelize.define("Roomtables", {
  roomNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rentStartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rentAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  ownerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ownerContactNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ownerAddharNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lastMonthBijliBill: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  totalBijliTillDate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  bijliBillAmountToPay: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  rentPaidTillMonth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
export { roomData, Userdata };
