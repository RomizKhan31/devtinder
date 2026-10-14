
const express = require("express");

const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();


// app.use("/admin", adminAuth);
// app.use("/user", userAuth);

app.get("/admin/getAllData", adminAuth, (req, res) => {
    res.send("Admin's all data is sent successfully");
});

app.post("/user/login", (req, res) => {
    res.status(201).send("login successful!!!");
});

app.get("/user/data", userAuth, (req, res) => {
    res.send("user's all data is sent successfully");
});


app.listen(3333, () =>
    console.log("The server is listening on port 3333..."));