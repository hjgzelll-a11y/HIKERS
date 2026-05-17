const crypto = require('crypto');
global.crypto = crypto;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

mongoose.connect("mongodb://Cabatang:987654321@ac-lltjji6-shard-00-00.3amvvip.mongodb.net:27017,ac-lltjji6-shard-00-01.3amvvip.mongodb.net:27017,ac-lltjji6-shard-00-02.3amvvip.mongodb.net:27017/?ssl=true&replicaSet=atlas-14abth-shard-0&authSource=admin&appName=Cluster0")
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

  res.json({
  name: user.name,
  email: user.email,
  role: user.role
});

});
app.post("/reset-password", async (req, res) => {

  const { email, newPassword } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({
      error: "Email not found"
    });
  }

  user.password = newPassword;

  await user.save();

  res.json({
    message: "Password updated successfully ✅"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});