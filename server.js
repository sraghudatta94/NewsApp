var path = require('path');
var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var index = require('./webserver/routes/index');
var users = require('./webserver/routes/users');
var saveNews = require('./webserver/routes/saveNews');
var viewNews = require('./webserver/routes/viewSavedNews');
var updateNews = require('./webserver/routes/updateNews');
var deleteNews = require('./webserver/routes/deleteNews');
var User = require('./webserver/modal/userSchema');
var app = express();
app.use(passport.initialize());
app.use(passport.session());

var compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, './webclient/')));


//Mongoose
var db = 'mongodb://localhost/test';
mongoose.connect(db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connnected with mongo");
});

console.log("From server ");



//Routes

app.use('/data', index);
app.use('/stream',users);
app.use('/save',saveNews);
app.use('/view',viewNews);
app.use('/update',updateNews);
app.use('/delete',deleteNews);

app.post('/login',passport.authenticate('local'),function(req, res, next) {
  res.send('succefully loggedIn');
});
//Using Passport for Authprization
passport.use(new LocalStrategy(
  function(username,password,done){
    User.findOne({username:username},function(err,user){
      if(err){
        console.log('error');
        return done(err);}
      if(!user){
        console.log('incorrect username');
        return done(null,false,{message:'Incorrect username'});
      }
      if(user.password!=password){
        console.log('incorrect password');
        return done(null,false,{message:'Incorrect password'});
      }
      return done(null,user);
    });
  }
));
passport.serializeUser(function(user, done) {
  console.log("My user id"+user.id);
  done(null, user.id);

});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
}));

app.use(webpackHotMiddleware(compiler));



//Listening to port 8080
app.listen(8080, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }

    console.log("Server started at 8080");
});
