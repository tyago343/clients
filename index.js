const app = require('express')();
const express = require('express');
const session = require ('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const UserRouter = require('./routes/user.js');
const ClientsRouter = require('./routes/clients.js');
const Users = require('./db/users.json');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({ secret: 'anything' }));
app.use(express.static(path.join(__dirname,'./dist')));
app.use(express.static(path.join(__dirname,'./assets')));


app.use(passport.initialize());
app.use(passport.session())


app.use('/api/v1/user', UserRouter);
app.use('/api/v1/clients', ClientsRouter);


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
      let user = Users.find( user => user.email === username);
      if(!user){
          return done(null, false, { message: 'Incorrect username.' });
      }
      if(user.password != password){
          return done(null, false, { message: 'Incorrect password' })
      }
      return done(null, user);
    }
  ));
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'));
});


app.listen(8000, ()=>{
    console.log('Listening at port 8000')
});

module.exports = app;