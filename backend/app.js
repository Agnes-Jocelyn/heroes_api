var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
require ('dotenv').config()


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const HeroesRouter = require('./routes/heroes');


var app = express();
const mongodConnect = process.env.DB_CONNECTION
mongoose.connect(mongodConnect,{
    useNewUrlParser : true,
    useUnifiedTopology:true
});


app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/heroes', HeroesRouter);

module.exports = app;
