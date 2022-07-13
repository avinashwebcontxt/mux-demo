const bodyParser = require('body-parser');
const express = require("express");
const cors = require('cors');
const mw = express();

// mw.use(cors());

mw.use(bodyParser.urlencoded({
    extended: true
}));

mw.use(bodyParser.json());

module.exports = mw;