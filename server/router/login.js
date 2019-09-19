const express = require("express")
const router = express.Router()
const passport = require("passport")
const jwt = require("jsonwebtoken")
const config = require("../config/config")

router.post('/', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {

        if(err){
            const error = new Error('An Error occuredhihihihih')
            return next(error);
        }
        else {
            if(!user){
                res.json({
                    message: 'login fail'
                })
            }
            else{
                if(user[0].title == 'student'){
                    const token = jwt.sign({title: user[0].title, msv: user[0].msv}, config.jwt.jwtSecret)
                    res.json({token: token, title: user[0].title, msv: user[0].msv, name: user[0].name})
                }
                if(user[0].title == 'teacher'){
                    const token = jwt.sign({title: user[0].title, name: user[0].name}, config.jwt.jwtSecret)
                    res.json({token: token, title: user[0].title, name: user[0].name})
                }
                if(user[0].title == 'admin'){
                    const token = jwt.sign({title: user[0].title, name: user[0].name}, config.jwt.jwtSecret)
                    res.json({token: token, title: user[0].title, name: user[0].name})
                }
            }
            
        }
    })(req, res, next)
})
module.exports = router