const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;


app.use(express.json());


const TaskRoutes = require('./routes/TaskRoutes');
const ClientRoutes = require('./routes/ClientRoutes');


app.use('/task', TaskRoutes);
app.use('/client', ClientRoutes);



app.get('/', function(req, res){
    res.send({"message": "ok"})
});




app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});