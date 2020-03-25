//Mongoose Connection
const mongoose = require('mongoose');
const con = mongoose.connect('mongodb+srv://todoUser:todoPassword@cluster0-ktdm9.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true } )

//Database Schema 
const todoSchema = new mongoose.Schema({
    item: String
});

const Todo = new mongoose.model('Todo', todoSchema);
module.exports = (app, bodyParser, urlencodedParser, jsonParser) => {

    app.get('/', (req, res) => {
        Todo.find({},(err, data) => {
            if(err) throw err;
            res.render('todo', { todoData : data });
        })
        
    });

    app.post('/todo', urlencodedParser,(req,res) => {
        const newItem = Todo(req.body).save((err,data) => {
            if(err) throw err;
            res.sendStatus(200);
        })
        
    });

    app.delete('/todo/:item', (req,res) => {
        Todo.find({item : req.params.item.replace(/\-/g, " ")}).remove( (err, data) => {
            if(err) throw err;
            res.json(data);
        })
    })

}