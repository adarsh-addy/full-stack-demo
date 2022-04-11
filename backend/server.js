const express = require("express")
const app = express()
app.use(express.json())

const cors = require("cors")
app.use(cors());

const helmet = require("helmet")
app.use(helmet());

app.use(express.static("public"))

const morgan = require("morgan")
app.use(morgan())

app.get('/', (req, res) => {
    res.sendFile("index.html")
})

const mnRoute = require("./backend")
app.use("/backend", mnRoute)

const Port = process.env.PORT || 3000

app.get('/test', (req, res) => {
    res.send("server is running on port 5000")
})


app.use('*', (req, res, next) => {
    res.json({
        message: "Sorry!!There is no any availabe routes as per your request"
    })
})

app.listen(Port, () => {
    console.log("server is running");
})

