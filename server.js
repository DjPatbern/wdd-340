const express = require("express")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const path = require("path")

// Set EJS and views directory
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// ✅ Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")))

// Home route
app.get("/", function(req, res) {
  res.render("index", { title: "Home" })
})

// Other routes
app.use(static)

// Environment variables
const port = process.env.PORT
const host = process.env.HOST

// Start server
app.listen(port, () => {
  console.log(`App listening on http://${host}:${port}`)
})
