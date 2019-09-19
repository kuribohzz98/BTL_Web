const multer = require('multer')
const path = require('path')
const xlsx = require('xlsx')
const account = require('../models/account')
const user = require('../config/user')
const classSurvey = require('../models/class')

var allowTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.oasis.opendocument.spreadsheet',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel.sheet.macroenabled.12'
]

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${path.resolve(__dirname, '../excel')}`)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

var fileFilter = (req, file, cb) => {
    if(allowTypes.indexOf(file.mimetype) != -1){
        cb(null, true)
    }
    else{
        cb(null,false)
    }
}
var upload = multer({storage: storage, fileFilter: fileFilter})
module.exports = upload

module.exports.uploadFile = (req, res) => {
    console.log(req.body.typeFile+ '++++')
    if(req.file === undefined){
        res.json({
            message:'not file excel'
        })
    }
    else{
        if(req.body.typeFile === 'student'){
            const fileEx = xlsx.readFile(`${path.resolve(__dirname, `../excel/${req.file.originalname}`)}`)
            const name = fileEx.SheetNames
            //console.log(xlsx.utils.sheet_to_json(fileEx.Sheets[name[0]]))
            const dataEx = xlsx.utils.sheet_to_json(fileEx.Sheets[name[0]])
            dataEx.map(data => {
                account.findOneAccountStudent(data['Mã sinh viên/Tên đăng nhập'],data['Mã sinh viên/Tên đăng nhập'],data['VNU email'], (err, datee) => {
                    if(datee.length == 0){
                        account.addAccountExcelStudent(data, result => {
                            //
                        }, error => {
                            console.log(error)
                        })
                    }
                    else{
                        console.log('error')
                    }
                })
            })
        }
        if(req.body.typeFile === 'teacher'){
            const fileEx = xlsx.readFile(`${path.resolve(__dirname, `../excel/${req.file.originalname}`)}`)
            const name = fileEx.SheetNames
            //console.log(xlsx.utils.sheet_to_json(fileEx.Sheets[name[0]]))
            const dataEx = xlsx.utils.sheet_to_json(fileEx.Sheets[name[0]])
            dataEx.map(data => {
                account.findOneAccountTeacher(data['Tên đăng nhập'],data['VNU email'], (err, datee) => {
                    if(datee.length == 0){
                        account.addAccountExcelTeacher(data, result => {
                            //
                        }, error => {
                            console.log(error)
                        })
                    }
                    else{
                        console.log(data['Tên đăng nhập'] + "already not exit")
                    }
                })
            })
        }
        if(req.body.typeFile === 'class'){
            const fileEx = xlsx.readFile(`${path.resolve(__dirname, `../excel/${req.file.originalname}`)}`)
            const name = fileEx.SheetNames
            //console.log(xlsx.utils.sheet_to_json(fileEx.Sheets[name[0]]))
            const dataEx = xlsx.utils.sheet_to_json(fileEx.Sheets[name[0]])
            let dsSinhVien = []
            new Promise((resolve, reject) => {
                for(let i = 8; i< dataEx.length-5; i++){
                    dsSinhVien.push({name: dataEx[i].__EMPTY_1, msv: dataEx[i].__EMPTY, ngaysinh: dataEx[i]['CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM'], khoadt: dataEx[i].__EMPTY_2})
                }
                resolve(dsSinhVien)
            }).then(data => {
                classSurvey.getClass(dataEx[5].__EMPTY_1, (err, res) => {
                    if(res.length == 0){
                        classSurvey.addClass(dataEx[5].__EMPTY_1, dataEx[6].__EMPTY_1, dataEx[3].__EMPTY_1, data, (result) => {
                            //
                        }, error => {
                            console.log(error)
                        })
                    }
                    else{
                        res.json({
                            message: "lop hoc da ton tai"
                        })
                    }
                })
            })
            
            //console.log(dataEx[3].__EMPTY_1) //ten giang vien
            // console.log(dataEx[5].__EMPTY_1) //ma mon hoc
            //console.log(dataEx[6].__EMPTY_1) //ten mon hoc
            // dataEx[8].__EMPTY //msv
            // dataEx[8].__EMPTY_1 // tensv
            // dataEx[8]['CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM'] // ngay sinh
            // dataEx[8].__EMPTY_2 // khoadt
            // footer 5 row length 100 -> i = 94
        }
    }
}