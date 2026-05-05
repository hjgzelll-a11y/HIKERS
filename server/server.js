const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/HikersDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// USER MODEL
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  role: { type: String, default: "user" }
});

// REGISTER
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    return res.json({ error: "User already exists" });
  }

  const user = new User({ name, email, password });
  await user.save();

  res.json({ message: "Registered successfully" });
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ error: "User not found" });
  }

  if (user.password !== password) {
    return res.json({ error: "Wrong password" });
  }

  res.json(user);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});