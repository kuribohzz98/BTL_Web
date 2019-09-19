const classSurvey = require('../models/class')
const cacCuocKs = require('../models/cac-cuoc-ks')

module.exports.getMyClass = (req, res) => {
    
    classSurvey.getMyClassStudent(Number(req.params.msv), (err, result) => {
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
                        tenmonhoc: data.tenmonhoc,
                        tengiangvien: data.tengiangvien
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

module.exports.getDanhSachMonHocCanDanhGia = (req, res) => {
    cacCuocKs.findCuocKsActive(req.body.mamonhoc, (err, data) => {
        if(err){
            console.log(err)
        }
        else{
            if(data.length != 0){
                res.json({
                    mamonhoc: data[0].mamonhoc
                })
            }
            else{
                res.json({
                    mamonhoc: "not found"
                })
            }
        }
    })
}

module.exports.sendPhieuDanhGia = (req, res) => {
    cacCuocKs.checkDanhGia(req.body.mamonhoc, req.body.msv, (err, resl) => {
        if(err) {
            console.log(err)
        }
        else{
            if(resl == null){
                cacCuocKs.addDanhGia(req.body.mamonhoc, req.body.msv, req.body.phieudanhgia, (err, data) => {
                    res.json({
                        message:'danh gia thanh cong'
                    })
                })
            }
            else{
                if(resl.length == 0){
                    cacCuocKs.addDanhGia(req.body.mamonhoc, req.body.msv, req.body.phieudanhgia, (err, data) => {
                        res.json({
                            message:'danh gia thanh cong'
                        })
                    })
                }
                else{
                    cacCuocKs.repeatDanhGia(req.body.mamonhoc, req.body.msv, req.body.phieudanhgia, (err,result) => {
                        res.json({
                            message:'danh gia thanh cong'
                        })
                    })
                }
            }
        }
    })
}
