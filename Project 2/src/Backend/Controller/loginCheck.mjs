import { Userdata } from "../Models/dataTypes.mjs";

const loginCheck = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await Userdata.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ error: "Wrong email or password." });
    }

    if (user.password !== password) {
      console.log("Password does not match");
      return res.status(400).json({ error: "Wrong email or password." });
    }

    // At this point, the email and password are correct
    // You can create a session or token for authentication

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to login. Please try again later." });
  }
};

export default loginCheck;
