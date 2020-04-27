var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
require ('dotenv').config()
const jwt = require('jsonwebtoken')
const privateKey = "secret"

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/Users');
const HeroesRouter = require('./routes/heroes');
const CountryRouter = require('./routes/country')

var app = express();
const mongodConnect = process.env.DB_LOCAL
mongoose.connect(mongodConnect,{
    useNewUrlParser : true,
    useUnifiedTopology:true
});

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Users', usersRouter);
app.use('/heroes',validationUser ,HeroesRouter);
app.use('/country', validationUser, CountryRouter )

function validationUser(req, res, next) {
    jwt.verify(req.headers["x-access-token"], privateKey, (err, decoded) =>{
        if(err){
            res.json(err)
        }else{
            req.body.userId = decoded.id;
            next();
        }
    })
}
module.exports = app;
