const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
});


app.get("/", (req, res) => {
    res.send("i am root")
})

// to send the param variable

app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    let { username, id } = req.params;
    let htmlstr = `<h1>Welcome to the page of @${username}</h1>`
    // res.send(`Welcome to the page of @${username}`);
    res.send(htmlstr);
})



app.get("/search", (req, res) => {
    // console.log(req.query);
    let { q } = req.query;
    if (!q) {
        res.send(`<h1>Nothing searched</h1>`)
    }
    res.send(`<h1>search results for query: ${q}</h1>`)
})