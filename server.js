// write code to set up the server 
// call express (require) 
const express = require('express');
const app = express();
const database = require('./db/db.json');
// stand up the PORT (8080)
const PORT = process.env.PORT || 8080;
const path = require('path');
// use express 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.get('/api/notes', (req,res) => {
 res.json(database);
 //what the response to user will contain
})

require('./routes/htmlRoutes')(app);


  

// Listen to PORT
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
});