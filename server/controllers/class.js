const classSurvey = require('../models/class')

module.exports.getListClass = (req, res) => {
    classSurvey.getAllClass((error, data) => {
        if(error){
            res.json(error)
        }
        else{
            res.json(data)
        }
    })
}

module.exports.xoaClass = (req, res) => {
    classSurvey.deleteClass(req.body.mamonhoc, err => {
        res.json({
            message:'delete success'
        })
    })
}