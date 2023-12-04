const express = require('express');
const path = require("path");
const app = express();

// #############################################################################
// Logs all request paths and method
app.use(function (req, res, next) {
  res.set('x-timestamp', Date.now());
  res.set('x-powered-by', 'cyclic.sh');
  console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`);
  next();
});

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
};
app.use(express.static('public', options));

// #############################################################################
// Handle form submission
app.post('/submit', (req, res) => {
  const input1 = req.body.input1;
  const input2 = req.body.input2;

  // Process the data as needed
  const result = `Received: ${input1} and ${input2}`;

  // Send the result back to the client
  res.send(result);
});

// #############################################################################
// Catch all handler for all other request.
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
