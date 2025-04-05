// import express from 'express'
require('dotenv').config();  // Make sure dotenv is properly configured
const express = require('express');

const app = express();
const port = process.env.PORT || 5000; // Use environment variable or fallback to 5000

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/ai', (req, res) => {
    res.send("Hi Ai..");
});

app.listen(port, () => {
    console.log(`\nSTART NOW on port ${port}`);
});
