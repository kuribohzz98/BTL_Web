const mongoose = require("mongoose")
// Setup schema
var contactSchema = mongoose.Schema({
    mamonhoc:{
        type: String,
        require: true
    },
    tenmonhoc:{
        type: String,
        require: true
    },
    tengiangvien:{
        type: String,
        require: true
    },
    dssinhvien:{
        type: Array
    }
});
var Contact = module.exports = mongoose.model("lophoc", contactSchema)

module.exports.addClass = (mamonhoc, tenmonhoc, tengiangvien, dssinhvien, callbackthen, callbackcatch) => {
    new Contact({
        mamonhoc: mamonhoc,
        tenmonhoc: tenmonhoc,
        tengiangvien: tengiangvien,
        dssinhvien: dssinhvien
    }).save()
    .then(callbackthen)
    .catch(callbackcatch)
}

module.exports.getClass = (mamonhoc, callback) => {
    Contact.find({mamonhoc: mamonhoc}).exec(callback)
}

module.exports.getAllClass = (callback) => {
    Contact.find().exec(callback)
}

module.exports.getMyClassStudent = (msv, callback) => {
    Contact.find({'dssinhvien': {$elemMatch: {msv: msv}}}).exec(callback)
}

module.exports.getMyClassTeacher = (name, callback) => {
    Contact.find({tengiangvien: name}).exec(callback)
}

module.exports.deleteClass = (mamonhoc, callback) => {
    Contact.find({mamonhoc:mamonhoc}).remove().exec(callback)
}