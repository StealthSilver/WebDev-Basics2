const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Sample posts data
let posts = [
    {
        id: uuidv4(),
        username: "pogo",
        content: "I love cake",
    },
    {
        id: uuidv4(),
        username: "dingo",
        content: "I love ice cream",
    },
    {
        id: uuidv4(),
        username: "micky",
        content: "I love apple",
    },
];

// Default route
app.get("/", (req, res) => {
    res.send("Server is working well!");
});


app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content })
    res.redirect("/posts")
});

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    if (post) {
        res.render("show.ejs", { post });
    }
});

app.patch("/post/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    const post = posts.find(p => p.id === id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts")
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
})

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts")
})


// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});