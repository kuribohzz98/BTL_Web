const classSurvey = require('../models/class')
const cacCuocKs = require('../models/cac-cuoc-ks')

module.exports.getMyClass = (req, res) => {
    classSurvey.getMyClassTeacher(req.body.name, (err, result) => {
        if(err){
            res.json(err)
        }
        if(result.length == 0){
            res.json({
                message: 'class not found'
            })
        }
        if(result.length != 0){
            new Promise((resolve, reject) => {
                let myclass = []
                result.map(data => {
                    myclass.push({
                        mamonhoc: data.mamonhoc,
                        tenmonhoc: data.tenmonhoc
                    })
                })
                resolve(myclass)
            })
            .then(data => {
                res.json(data)
            })
        }
    })
}

module.exports.getMyKQKS = (req, res) => {
    cacCuocKs.findCuocKs(req.body.mamonhoc, (err, result) => {
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}