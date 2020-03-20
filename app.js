const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();

app.set('view engine', 'ejs');

app.use('/public',express.static('public'));

todoController(app);

app.listen(5000);
console.log("Listening to port 5000");