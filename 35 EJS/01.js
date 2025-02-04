const express = require("express");
const app = express();
const path = require("path")
const port = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"))
// setting views to the given path

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/hello", (req, res) => {
    res.send("hello")
})

app.get("/dice", (req, res) => {
    let diceval = Math.floor(Math.random() * 6) + 1;
    //assuming the value comes from the database
    res.render("dice.ejs", { diceval });
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

