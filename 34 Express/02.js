const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
});

app.get("/", (req, res) => {

    console.log("request recieved");

    res.send("hello i am root")
});

app.get("/apple", (req, res) => {

    console.log("request recieved");

    res.send("you contacted the apple path")
});

app.get("/orange", (req, res) => {

    console.log("request recieved");

    res.send("you contacted the orange path")
});

// to send the custom response

app.get("*", (req, res) => {
    console.log("request recieved");
    res.send("this path does not exist")
})

// post method

app.post("/", (req, res) => {
    console.log("request sent");
    res.send("you sent a post request to the root")
})