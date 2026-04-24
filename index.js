const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

console.log("__dirname =", __dirname);
console.log("__filename =", __filename);
console.log("process.cwd() =", process.cwd());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/resurse", express.static(path.join(__dirname, "resurse")));

app.get(["/", "/index", "/home"], (req, res) => {
    res.render("pagini/index");
});

app.listen(PORT, () => {
    console.log(`Serverul ruleaza pe http://localhost:${PORT}`);
});


app.get("/despre", (req, res) => {
    res.render("pagini/despre");
});

app.get("/contact", (req, res) => {
    res.render("pagini/contact");
});

app.get("/galerie-statica", (req, res) => {
    res.render("pagini/galerie-statica");
});

app.get("/galerie-dinamica", (req, res) => {
    res.render("pagini/galerie-dinamica");
});