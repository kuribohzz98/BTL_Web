const express = require("express")
const router = express.Router()
const teacher = require('../controllers/teacher')

router.route('/getMyClass')
    .post(teacher.getMyClass)
router.route('/getMyKQKS')
    .get(teacher.getMyKQKS)
module.exports = router