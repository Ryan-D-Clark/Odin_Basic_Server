const express = require("express")
const app = express()

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"))
app.get("/about", (req, res) => res.sendFile(__dirname + "/about.html"))
app.get("/contact-me", (req, res) => res.sendFile(__dirname + "/contact-me.html"))
app.get("*unknown", (req, res) => res.sendFile(__dirname + "/404.html"))


const PORT = process.env.PORT || 8080
app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`My first Express app - listening on port ${PORT}!`)
})
