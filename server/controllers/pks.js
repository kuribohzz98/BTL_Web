const pks = require("../models/pks")
const cacCuocKs = require("../models/cac-cuoc-ks")

module.exports.getPks = (req, res) => {
    pks.getList((err, result) => {
        if(err){
            res.send(err)
        }
        else{
            res.json(result)
        }
    })
}

module.exports.editTitle = (req, res) => {
    // let title = req
    // let old_value = req.params.old_value
    // let new_value = req.params.new_value
    // console.log(title)
    // pks.editTitle(title, old_value, new_value, (err, data) => {
    //     if(err){
    //         res.json(err+ 'hihi')
    //     }
    //     else{
    //         res.json(data)
    //     }
    // })
}

module.exports.addValueOfTitle = (req, res) => {
    let title = req.body.title;
    let value = req.body.value;
    pks.findOneValue(title, value, (err, data) => {
        if(err){
            res.json(err)
        }
        else{
            if(data.length == 0){
                pks.addValueOfTitle(title, value, (err, data) => {
                    if(err){
                        res.json({
                            status:"error"
                        })
                    }
                    else{
                        res.json({
                            status:"success"
                        })
                    }
                })
            }
            else{
                res.json({
                    status: "already exist"
                })
            }
        }
    })
}

module.exports.deleteValueOfTitle = (req, res) => {
    let title = req.body.title;
    let value = req.body.value;
    pks.deleteValueOfTitle(title, value, (err, data) => {
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
}

module.exports.createCuocKs = (req, res) => {
    cacCuocKs.findCuocKs(req.params.mamonhoc, (err, result) => {
        if(err){
            res.json(err)
        }
        else{
            if(result.length == 0) {
                cacCuocKs.createCuocKs(req.params.mamonhoc, data => {
                    res.json({
                        message: 'Tao khao sat thanh cong'
                    })
                }, err=> {
                    res.json(err)
                })
            }
            else{
                res.json({
                    message: 'Cuoc khao sat da ton tai'
                })
            }
        }
    })
}

module.exports.getALLKQKS = (req, res) => {
    cacCuocKs.getAllKQKS((err, result) => {
        if(err){
            res.json(err)
        }
        else{
            if(result == null){
                res.json({
                    message: 'khong co cuoc khao sat nao'
                })
            }
            else{
                if(result.length == 0){
                    res.json({
                        message: 'khong co cuoc khao sat nao'
                    })
                }
                else{
                    res.json(result)
                }
            }
        }
    }) 
}

module.exports.xoaKS = (req, res) => {
    cacCuocKs.XoaCuocKhaoSat(req.body.mamonhoc, (err)=> {
        res.json({
            message: 'xoa thanh cong'
        })
    })
}

module.exports.getKQKS = (req, res) => {
    cacCuocKs.getKQKS(req.body.mamonhoc, (err, result) => {
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}

module.exports.ketThucKS = (req, res) => {
    cacCuocKs.ketThucKhaosat(req.body.mamonhoc, err => {
        res.json({
            message:'da ket thuc'
        })
    })
}

module.exports.getAllKsActive = (req, res) => {
    cacCuocKs.findAllCuocKsActive((err, data) => {
        res.json(data)
    })
}