require('dotenv').config()
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const mongoose = require('mongoose');

// const url = "mongodb+srv://root22:85236974@cluster.8ajil.mongodb.net/todo?retryWrites=true&w=majority";


const url = 'mongodb+srv://' + DB_USER + ':' + DB_PASSWORD + '@cluster0.ft2n9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true });


module.exports = mongoose;