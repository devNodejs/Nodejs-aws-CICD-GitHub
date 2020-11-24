
// import 'babel-polyfill';
// import express from 'express';
const express = require('express')

const app = express ();

const port = process.env.PORT || 8081;

app.get ('/', (req, res) => {
  res.send ('Welcome to the Home page..........');
});

app.listen (port, () => {
  console.log (
    `CI-CD-GitHub-aws-server Application listening on port ${port} !`
  );
});
