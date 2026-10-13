// multiple route handlers

const express = require("express");
const app = express();

app.use("/user", (req, res, next) => {
    console.log("Handling the route user1");
   //res.send("response1!!");
    next();
},
    (req, res, next) => {
        console.log("handing the route user2");
        next();
       //res.send("response2");
    },
    (req, res, next) => {
        console.log("handing the route user3")
        next();
    },
    (req, res, next) => {
        console.log("handing the route user4")
       res.send("4th response!!!");
    }
),


    app.listen(3333, () =>
        console.log("The server is running on port 3333..."));