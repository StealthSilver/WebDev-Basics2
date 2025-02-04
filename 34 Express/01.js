const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
});

// this starts a server , to stop press control + C
// check the server on localhost:3000

app.use((req, res) => {

    console.log("request recieved");

    //string response 

    // res.send("this is a basic response");

    //object as response

    // res.send({
    //     name: "apple",
    //     color: "red"
    // })

    // html response

    res.send("<h1>Fruits</h1> <ul><li>apple</li> <li> Orange</li></ul>")

})

app.use((req, res) => {
    console.log("request recieved");
})
