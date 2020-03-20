module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('todo', { data : ['Get Milk', 'Get Chocolate'] });
    });


}