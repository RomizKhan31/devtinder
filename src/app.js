const express = require("express");

const app = express();

app.use("/test",(req, res) => {
    res.send("Hello from the test!");;
});

app.use("/dashboard",(req, res) => {
    res.send("Hello from the demo sadasfDashbdfdemokhansdfoard");
});

app.use("/about",(req, res) => {
    res.send("Hello from the about page");
});

app.listen(3333, () => {
    console.log("server is successfully listening from port 3333...")
}
);