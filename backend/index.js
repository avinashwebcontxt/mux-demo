require('dotenv').config();
const express = require("express");
const bodyParser  = require('body-parser');
const route = require("./routes/route.js");
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use("/", route);

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
});