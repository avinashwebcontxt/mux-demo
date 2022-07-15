const express = require('express');
const route = express.Router();

const { getTokent } = require('./client');

route.post("/getToken", getTokent);

module.exports = route; 