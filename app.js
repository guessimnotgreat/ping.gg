const express = require('express');
const path = require("path");
const app = express();
const { fetchIDInfo } = require('./riotApi')

// Middleware to parse JSON requests
app.use(express.json());

// Logs all request paths and method
app.use(function (req, res, next) {
  res.set('x-timestamp', Date.now())
  res.set('x-powered-by', 'cyclic.sh')
  console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`);
  next();
});

// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('public', options));

// Handle form submission
app.post('/submit', async (req, res) => {
  const input1 = req.body.input1;
  const input2 = req.body.input2;

  try {
    const idInfo = await fetchIDInfo(input1, input2);

    // Process the data as needed
    const result = {
        puuid: idInfo.puuid,
        gameName: idInfo.gameName,
        tagLine: idInfo.tagLine,
    };

    // Send the result back to the client as JSON
    res.json(result);
  } catch (error) {
    console.error(`Error fetching ID info: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Catch all handler for all other requests.
app.use('*', (req, res) => {
  res.json({
    at: new Date().toISOString(),
    method: req.method,
    hostname: req.hostname,
    ip: req.ip,
    query: req.query,
    headers: req.headers,
    cookies: req.cookies,
    params: req.params
  })
  .end();
});

module.exports = app;
