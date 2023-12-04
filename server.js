// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/hello', (req, res) => {
    const input1 = req.query.input1 || 'undefined';
    const input2 = req.query.input2 || 'undefined';
    const result = `Input 1: ${input1}, Input 2: ${input2}`;
    res.send(result);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
