const mongoose = require("mongoose")

var contactSchema = mongoose.Schema({
    status: Number,
    mamonhoc: String,
    danhgia: Array
})

var Contact = module.exports = mongoose.model("caccuocks", contactSchema)

module.exports.createCuocKs = (mamonhoc, callbackthen, callbackcatch) => {
    new Contact({
        status:1,
        mamonhoc: mamonhoc,
        danhgia: []
    }).save()
    .then(callbackthen)
    .catch(callbackcatch)
}

module.exports.findCuocKs = (mamonhoc, callback) => {
    Contact.find({mamonhoc:mamonhoc}).exec(callback)
}
module.exports.checkDanhGia = (mamonhoc, msv, callback) => {
    Contact.findOne({mamonhoc: mamonhoc, danhgia:{$elemMatch:{msv:msv}}}).exec(callback)
}
module.exports.repeatDanhGia = (mamonhoc, msv, phieudanhgia, callback) => {
    Contact.update({mamonhoc: mamonhoc, danhgia:{$elemMatch:{msv:msv}}}, {$set: {'danhgia.$.value':phieudanhgia}}, callback)
}
module.exports.addDanhGia = (mamonhoc, msv, phieudanhgia, callback) => {
    Contact.where({mamonhoc:mamonhoc}).update({$push:{'danhgia':{msv:msv, value: phieudanhgia}}}).exec(callback)
}
module.exports.getAllKQKS = (callback) => {
    Contact.find().exec(callback)
}
module.exports.getKQKS = (mamonhoc, callback) => {
    Contact.find({mamonhoc: mamonhoc}).exec(callback)
}
module.exports.XoaCuocKhaoSat = (mamonhoc, callback) => {
    Contact.find({mamonhoc:mamonhoc}).remove().exec(callback);
}
module.exports.ketThucKhaosat = (mamonhoc, callback) => {
    Contact.where({mamonhoc:mamonhoc}).update({status:0}).exec(callback)
}
module.exports.findCuocKsActive = (mamonhoc, callback) => {
    Contact.find({mamonhoc:mamonhoc, status:1}, callback)
}
module.exports.findAllCuocKsActive = (callback) => {
    Contact.find({status: 1}, callback)
}
// danhgia:{$elemMatch:{msv:"16021276",$set:{msv:[1,1,1]}}}
// module.exports.editTitle = (title, old_value, new_value, callback) => {
//     Contact.updateOne({title: title, value: old_value},{$set:{'value.$':new_value}}, callback)
// }

// module.exports.addValueOfTitle = (title, value, callback) => {
//     Contact.where({title:title}).update({$push: {value: value}}).exec(callback)
// }

// module.exports.findOneValue = (title, value, callback) => {
//     Contact.find({title:title, value: value}).exec(callback)
// }
// module.exports.deleteValueOfTitle = (title, value, callback) => {
//     Contact.where({title: title}).update({$pull:{value: value}}).exec(callback)
// }
