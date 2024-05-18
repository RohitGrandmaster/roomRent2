import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import signupCreate from "./signUpCreate.mjs";
import loginCheck from "./loginCheck.mjs";
import roomCreate from "./roomCreate.mjs";
import fetchOwner from "./fetchOwner.mjs";
import deleteOwner from "./deleteOwner.mjs";
import editOwner from "./editOwner.mjs";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/signup", signupCreate);
app.post("/login", loginCheck);
app.post("/saveroom", roomCreate);
app.get("/roomfetch", fetchOwner);
app.delete("/rooms/:id", deleteOwner);
app.put("/roomupdate/:id", editOwner);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
