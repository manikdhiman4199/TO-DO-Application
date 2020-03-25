const express = require('express');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todoController');
const app = express();

//Setting the view engine to Ejs
app.set('view engine', 'ejs');

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
 
app.use('/public',express.static('public'));

//Controlroller that handles all the requests
todoController(app, bodyParser, urlencodedParser, jsonParser);

app.listen(5000);
console.log("Listening to port 5000");