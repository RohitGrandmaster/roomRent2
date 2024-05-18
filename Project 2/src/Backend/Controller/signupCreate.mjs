import { Userdata } from "../Models/dataTypes.mjs";

const signupCreate = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);

  try {
    const newUser = await Userdata.create({ email, password });
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export default signupCreate;
