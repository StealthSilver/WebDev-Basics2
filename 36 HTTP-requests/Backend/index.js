const express = require("express");
const app = express();

const port = 3000;

//for parsing the post request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`standard GET response. Welcome ${user}`);
})

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    console.log(user, password)
    res.send(`standard POST response. Welcome ${user}`);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

