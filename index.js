const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;


app.use(express.json());


const TaskRoutes = require('./routes/TaskRoutes');

app.use('/task', TaskRoutes);





app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
});