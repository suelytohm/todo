const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
app.use(cors());
// const port = 3000;
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());


const TaskRoutes = require('./routes/TaskRoutes');

app.use('/task', TaskRoutes);









/*

module.exports = function(){
    var express = require('express');
    var bodyParser = require('body-parser');
    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    var rotas = require('../app/routers/web');
    rotas(app);

    const port = process.env.PORT || 3000;

    app.listen(port, function(){
        console.log("Servidor rodando na porta: " + port)
    });
};


*/











app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});