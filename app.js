const express = require("express");
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/home.html" ))
});

app.get("/about-us", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about.html"))
});
app.get("/our-work", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/works.html"))
});

app.get("/gallery", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/photo-gallery.html"))
})

app.listen(3000, () => {
    console.log("server is listening on port 3000")
});