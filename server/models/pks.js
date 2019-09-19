const mongoose = require("mongoose")

var contactSchema = mongoose.Schema({
    title: String,
    value: []
});

var Contact = module.exports = mongoose.model("pks", contactSchema)

module.exports.getList = callback => {
    Contact.find(callback);
}

module.exports.editTitle = (title, old_value, new_value, callback) => {
    Contact.updateOne({title: title, value: old_value},{$set:{'value.$':new_value}}, callback)
}

module.exports.addValueOfTitle = (title, value, callback) => {
    Contact.where({title:title}).update({$push: {value: value}}).exec(callback)
}

module.exports.findOneValue = (title, value, callback) => {
    Contact.find({title:title, value: value}).exec(callback)
}
module.exports.deleteValueOfTitle = (title, value, callback) => {
    Contact.where({title: title}).update({$pull:{value: value}}).exec(callback)
}
