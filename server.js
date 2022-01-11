const express = require("express")
const app = express()
const path = require("path")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    console.log("Running")
    res.render("index")
})

app.listen(3000)