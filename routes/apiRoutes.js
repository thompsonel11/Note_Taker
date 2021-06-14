const noteData = require('../db/db.json');
const { nanoid } = require('nanoid');
const fs = require('fs')

module.exports = (app) => {
    // app.get('api/notes', (req,res) => res.json(noteData));
    app.get('/api/notes', (req,res) => {
    res.json(noteData);
    // what the response to user will contain
    })

    app.post('/api/notes', (req,res) => {
        console.log(noteData);
        console.log(req.body);
        // adds ID onto the req.body
        req.body.id = nanoid(10);
        noteData.push(req.body);
        console.log(noteData);
        updateDB(noteData);
        res.json(noteData);
    })

}

function updateDB (noteData) {
    fs.writeFile("./db/db.json", JSON.stringify(noteData), (error) =>
    error ? console.log(error, __dirname) : console.log('Success')
    )
}