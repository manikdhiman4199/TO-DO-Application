let data = [{item: 'Get Milk'}, {item: 'Get Chocolate'}];

module.exports = (app, bodyParser, urlencodedParser, jsonParser) => {

    app.get('/', (req, res) => {
        res.render('todo', { todoData : data });
    });

    app.post('/todo', urlencodedParser,(req,res) => {
        data.push(req.body);
        res.sendStatus(200);
    });

    app.delete('/todo/:item', (req,res) => {
        data = data.filter((todo) => {
            console.log(todo.item.replace(/ /g, "-"));res
            return todo.item.replace(/ /g, "-") !== req.params.item;
        })
        console.log(data);
        res.json(data);
    })

}