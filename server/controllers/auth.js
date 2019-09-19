const model = require("../models/account")
const passport = require("passport")
const config = require("../config/config")
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt")
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


passport.serializeUser(function(user, done) {
    done(null, user.id)
});

passport.deserializeUser(function(id, done) {
    model.findById(id, function(err, user) {
      done(err, user);
    });
});

// passport.use('create-account', new localStrategy({
//     usernameField : 'username',
//     passwordField : 'password'
// }, (username, password, done) => {
//     model.findOne({username}, (err, user) => {
//         if(err){
//             return done(err)
//         }
//         if(user){
//             return done(null, false, {message: "username already exists"})
//         }
//         if(!user){
//             var newUser = new model()
//             newUser.username = username
//             newUser.password = newUser.generateHash(password)
//             newUser.save(err => {
//                 if(err) throw err
//                 else return done(null, newUser)
//             })
//         }
//     })
// }))

passport.use(new localStrategy({
    usernameField : 'username',
    passwordField : 'password'
}, (username, password, done) => {
    try{
        model.findUserName(username, (err, user) => {
            if(user.length == 0 || err){
                return done(null, false, {message: "Can't found account"})
            }
            else{
                if(!bcrypt.compareSync(password, user[0].password)){
                    return done(null, false, {message: "Wrong password"})
                }
                else{
                    return done(null, user, {message: "logged in successfully"})
                }
            }
        })
    }
    catch(err){
        return done(err)
    }
}))
passport.use(new JWTstrategy({
    secretOrKey : config.jwt.jwtSecret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
}, async (token, done) => {
    try {
        return done(null, token)
    } catch (error) {
        done(error)
    }
}))