
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/collect', (req, res) => {
    console.log("Captured Data:", req.body);
    res.status(200).json({ status: "captured" });
});

// IMPORTANT: Do NOT use app.listen(). Vercel handles the server for you.
module.exports = app;