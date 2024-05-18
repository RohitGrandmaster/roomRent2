// db.js
import Sequelize from "sequelize";

const sequelize = new Sequelize("roomrent", "root", "toor", {
  host: "localhost",
  dialect: "mysql",
  // logging: console.log,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

sequelize
  .sync()
  .then(() => {
    console.log("Models synchronized successfully.");
    // Your other code here
  })
  .catch((error) => {
    console.error("Unable to synchronize models:", error);
  });
export default sequelize;
