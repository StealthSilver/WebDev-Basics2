const express = require("express");
const app = express();
const path = require("path")
const port = 3000;


app.use(express.static(path.join(__dirname, "public/css")))
app.use(express.static(path.join(__dirname, "public/js")))
// app.use(express.static("public"));
// to get all the static files which can be css or json, they must be in the public directory

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/ig/:username", (req, res) => {
    let { username } = req.params
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) {
        res.render("insta.ejs", { data });
    }
    else {
        res.render("error.ejs")
    }

})



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})