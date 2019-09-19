const account = require('../models/account')

module.exports.createAccount = (req, res) => {
    if(req.body.title == 'student'){
        account.findOneAccountStudent(req.body.username, req.body.msv, req.body.vnuemail, (err, data) => {
            if(data.length == 0){
                account.addAccount(req.body, data => {
                    res.json({
                        message: 'Created'
                    })
                }, err => {
                    res.json(err)
                })
            }
            else{
                res.json({
                    message: 'Account already exit'
                })
            }
        })
    }

    if(req.body.title == 'teacher'){
        account.findOneAccountTeacher(req.body.username, req.body.vnuemail, (err, data) => {
            if(data.length == 0){
                req.body.msv = req.body.hihi1
                req.body.khoadt = req.body.hihi2
                account.addAccount(req.body, data => {
                    res.json({
                        message: 'Created'
                    })
                }, err => {
                    res.json(err)
                })
            }
            else{
                res.json({
                    message: 'Account already exit'
                })
            }
        })
    }
}

module.exports.getUser = (req, res) => {
    account.getUser(req.body.title, (err, data) => {
        res.json(data)
    })
}

module.exports.deleteAccount = (req, res) => {
    console.log(req.body.username+ "===" + req.body.title)
    account.deleteUser(req.body.username, req.body.title, err => {
        if(err){
            res.json(err)
        }
        else{
            res.json({
                message: 'success'
            })
        }
    } )
}

module.exports.editAccount = (req, res) => {
    //console.log(req.body.user.title+ " ===" + req.body.username_old)
    if(req.body.user.title == 'student'){
        account.editStudent(req.body.username_old, req.body.user.title, req.body.user, (err) => {
            if(err){
                res.json(err)
            }
            else{
                res.json('edit success')
            }
        })
    }
    if(req.body.user.title == 'teacher'){
        account.editTeacher(req.body.username_old, req.body.user.title, req.body.user, (err) => {
            if(err){
                res.json(err)
            }
            else{
                res.json('edit success')
            }
        })
    }
}