
const express = require("express");

const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();



// Error handlers, professional way : try-catch. if you generate a custom error use : throw new errors


app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("something went wrong!! please fix the error currectly.");
    }
});

app.get("/userData", (req, res, next) => {

    try {
        throw new Error("created custom error!!!");
        res.send("user data sent");
    } catch (err){
        res.send("something went wrong, please contact the admin team!!");
    }
    

})







app.listen(3333, () =>
    console.log("The server is listening on port 3333..."));