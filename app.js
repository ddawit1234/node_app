const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

port = 5000
app.listen(port, () => console.log("listening on port 3001"))