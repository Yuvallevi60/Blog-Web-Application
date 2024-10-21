import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});



app.post("/", (req, res) => {
    const newPost = {
        pHead: req.body["pHead"],
        pBody: req.body["pBody"]};
    posts.push(newPost);
    res.render("index.ejs", { posts });
});

app.post("/postpage", (req, res) => {
    const pIndex = req.body["pIndex"]
    res.render("postpage.ejs", {pIndex, posts});
});

app.post("/edit", (req, res) => {
    const pIndex = req.body["pIndex"]
    res.render("postedit.ejs", {pIndex, posts});
});

app.post("/afterEdit", (req, res) => {
    const updatedPost = {
        pHead: req.body["pHead"],
        pBody: req.body["pBody"] };
    const pIndex = req.body["pIndex"];
    posts[pIndex] = updatedPost;
    res.render("postpage.ejs", {pIndex, posts});
});


app.post("/delete", (req, res) => {
    let index = req.body["pIndex"];
    posts.splice(index, 1);
    res.render("index.ejs", { posts });
});

app.listen(port, () =>
{
    console.log(`Listen to port ${port}.`)
});