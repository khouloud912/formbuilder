//imports
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
//const passport=require('passport');
var app = express();
mongoose
.connect("mongodb://localhost:27017/testdb", {
useUnifiedTopology: true,
useNewUrlParser: true,
useCreateIndex:true,
useFindAndModify: false
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log('error while connecting');
});

app.use(morgan('dev'))
app.use(bodyparser.json());
app.use(cors());
//app.use(passport.initialize());

require('./routes/test.route')(app)
app.listen(3030);

