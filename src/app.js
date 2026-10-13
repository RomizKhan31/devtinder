const express = require("express");

const app = express();

// // order matter , this is very much important whenever you write code. Always remember the order of the code.
// app.use("/user",(req, res) => {
//     res.send("Hello from the demo test!");;
// });

app.use("/", (req, res) =>{
    res.send("system unstable , HAHAHAHAHAH!!!!");
})

app.get("/user", (req, res) => {
    // get data from DB logic here
    res.send("Get data using get() instead of using use()");
});

app.post("/user", (req, res) =>{
    // post data from DB logic here
    res.send("Post data using post()");
});

app.delete("/user", (req, res) => {
    // delete data from the DB logic here.
    res.send("Delete data using delete()")
})


// If you use "use()" , it will interfere your all HTTP methods. to remove it use for GET = get()
// POST = post, DELETE = delete() etc
app.use("/test",(req, res) => {
    res.send("Hello from the test!");;
});


app.listen(3333, () => {
    console.log("server is successfully listening from port 3333...")
}
);