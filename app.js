const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

port = 3001
app.listen(port, () => console.log("listening on port 3001"))