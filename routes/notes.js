const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
  console.log(req.body);

  const { noteTitle, noteText } = req.body;

  if (req.body) {
    const newTip = {
      noteTitle,
      noteText,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;
