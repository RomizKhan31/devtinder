// const express = require("express");

// const app = express();

// // // order matter , this is very much important whenever you write code. Always remember the order of the code.
// // app.use("/user",(req, res) => {
// //     res.send("Hello from the demo test!");;
// // });

// app.use("/", (req, res) =>{
//     res.send("system unstable , HAHAHAHAHAH!!!!");
// })

// app.get("/user", (req, res) => {
//     // get data from DB logic here
//     res.send("Get data using get() instead of using use()");
// });

// app.post("/user", (req, res) =>{
//     // post data from DB logic here
//     res.send("Post data using post()");
// });

// app.delete("/user", (req, res) => {
//     // delete data from the DB logic here.
//     res.send("Delete data using delete()")
// })


// // If you use "use()" , it will interfere your all HTTP methods. to remove it use for GET = get()
// // POST = post, DELETE = delete() etc
// app.use("/test",(req, res) => {
//     res.send("Hello from the test!");;
// });


// app.listen(3333, () => {
//     console.log("server is successfully listening from port 3333...")
// }
// );



// ?, + , * , (), these are not allowed in express vesion 5.0.0 or upper. valid for only express version 4.0.0. you should skip it but know the basic understanding.

// const express = require("express");
// const app = express();

// // ? → The preceding character is optional
// app.get("/colou?r", (req, res) => {
//     res.send("Color route matched!");
// });

// // + → The preceding character can repeat
// app.get("/ab+c", (req, res) => {
//     res.send("AB+C route matched!");
// });

// // () → Groups characters together
// app.get("/ab(cd)?e", (req, res) => {
//     res.send("Grouped route matched!");
// });

// // * → Matches a sequence of characters in the route pattern
// app.get("/ab*cd", (req, res) => {
//     res.send("Wildcard route matched!");
// });

// app.listen(3000, () => console.log("Server running on port 3000"));



const express = require('express');

const app = express();


// dynamic routes in express, use colon ':' for dynamic routing.
app.get("/user/:name/:id", (req, res) =>{
    res.send(req.params);
})


// search query or filter or sorting , we use it
app.get("/user", (req, res) => {
    console.log(req.query)
    res.send({firstName : "romiz", lastName : "Khan"});
});


// the paths which are ending with fly are valid 
app.get(/.*fly$/, (req, res) => {
    res.send("The route ends with fly");
});

// paths which includes a are valid

app.get(/a/, (req, res) => res.send("the routes includes with a are valid"));



app.listen(3000, () => console.log("sever running on the port 3000"));