const express = require('express');
const router = express.Router();
const fs = require('fs');
const db = require('../db/db.json');
// Gives notes random id's
const{v4: uuidv4} = require('uuid');


// GET request
router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let dbData = JSON.parse(data);
        res.json(dbData);
    });
});

// POST request
router.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db);
});

// DELETE request
router.delete('/api/notes/:id', (req, res) => {
    let noteId = req.params.id;
    let newDb = db.filter(note => note.id !== noteId);
    fs.writeFileSync('./db/db.json', JSON.stringify(newDb));
    console.log(newDb);
    res.json(newDb);
});

module.exports = router;
