const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();
const PORT = 3333;

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "user created successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating user",
      error: error.message,
    });
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`The server is listening on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  });
