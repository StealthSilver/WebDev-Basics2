const express = require("express");
const app = express();
const path = require("path")
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/ig/:username", (req, res) => {

    let followers = ["adam", "mick", "groot"];
    let { username } = req.params;
    res.render("instagram.ejs");
})



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})