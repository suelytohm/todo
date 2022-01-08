const mongoose = require('mongoose');

const url = "mongodb+srv://root22:85236974@cluster.8ajil.mongodb.net/todo?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true });


module.exports = mongoose;