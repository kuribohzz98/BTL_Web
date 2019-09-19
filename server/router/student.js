const express = require("express")
const router = express.Router()
const student = require('../controllers/student')

router.route('/getMyClass/:msv')
    .get(student.getMyClass)
router.route('/getDanhSachMonHocCanDanhGia')
    .post(student.getDanhSachMonHocCanDanhGia)
router.route('/sendDanhGia')
    .post(student.sendPhieuDanhGia)
module.exports = router