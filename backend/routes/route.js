const express = require('express');
const jwt = require('jsonwebtoken');
const route = express.Router();

// route.get("/getToken", async (req, res) => {
route.post("/getToken", async (req, res) => {
    const {pid, role} = req.body;
    
    const token = await jwt.sign(
        {
            kid: process.env.MUX_SIGNING_KEY,
            pid,
            role: role ? role : 'guest',
            sub: process.env.STUDIO_ID,
            aud: 'studio',
        },
        Buffer.from(process.env.MUX_PRIVATE_KEY, 'base64'),
        { algorithm: 'RS256', expiresIn: '1d' },
    );

    res.json({
        data: { token }
    });
});

module.exports = route; 