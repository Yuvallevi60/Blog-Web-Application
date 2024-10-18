import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const posts = [];

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});

app.post("/", (req, res) => {
    posts.push(req.body["pHead"]);
    res.render("index.ejs", { posts })
});

app.listen(port, () =>
{
    console.log(`Listen to port ${port}.`)
});