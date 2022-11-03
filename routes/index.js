const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
const htmlRouter = require('./htmlRoutes');

const app = express();

app.use('/notes', notesRouter);
app.use('/htmlRoutes', htmlRouter);

module.exports = app;
