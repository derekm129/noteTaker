const express = require('express');
const router = express.Router();
const fs = require('fs');
let db = require('../db/db.json');
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
    const noteId = req.params.id;
    db = db.filter(note => note.id !== noteId);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    // if (db.length === 0) {
    //     fs.writeFileSync('./db/db.json', '[]');
    // }
    res.JSON(db);
});

module.exports = router;
