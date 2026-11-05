const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

//create a api endpoint to create a user
app.post("/signup", async (req, res) => {
  // creating a new instance or document of the User model
  const user = new User({
    name:"Shafi",
    email: "shafi@walton.com",
    age: 24,
    password: "123456",
  });

  try {
    await user.save();
    res.send("user created successfully");
  } catch (error) {
    res.status(401).send("Error creating user: " + error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3333, () =>
      console.log("The server is listening on port 3333..."),
    );
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
