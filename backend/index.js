require('dotenv').config();
const express = require("express");
const route = require("./routes/route.js");
const mw = require('./middleWares/middleWares.js');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(mw);

app.use("/", route);

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
});