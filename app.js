const express = require("express");
const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
    response.render("index", {
        groupe: "23602",
    });
});

app.listen(3000);

// Un commentaire peut-il être commenté?
// Sans commentaires.
