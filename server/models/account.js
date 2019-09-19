const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
// Setup schema
var contactSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    name: String,
    msv: String,
    vnuemail: String,
    khoadt: String,
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});
var Contact = module.exports = mongoose.model("accounts", contactSchema)
contactSchema.methods.generateHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

contactSchema.methods.isValidPassword = async (password) => {
    const compare = await bcrypt.compare(password, this.password);
    return  compare
}

// module.exports.isValidPassword = (password, password_user) => {
//     return bcrypt.compareSync(password, password_user)
// }

module.exports.findUserName = (username, callback) => {
    Contact.find({username: username}).exec(callback)
}

module.exports.findOneAccountStudent = (username, msv, vnuemail, callback) => {
    Contact.find({username: username, msv: msv, vnuemail: vnuemail}).exec(callback)
}

module.exports.findOneAccountTeacher = (username, vnuemail, callback) => {
    Contact.find({username: username, vnuemail: vnuemail}).exec(callback)
}

module.exports.addAccount = (user, callbackthen, callbackcatch) => {
    new Contact({
        title: user.title,
        name: user.name,
        msv: user.msv,
        vnuemail: user.vnuemail,
        khoadt: user.khoadt,
        username: user.username,
        password: bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    }).save()
    .then(callbackthen)
    .catch(callbackcatch)
}

module.exports.addAccountExcelStudent = (user, callbackthen, callbackcatch) => {
    new Contact({
        title: 'student',
        name: user['Họ và tên'],
        msv: user['Mã sinh viên/Tên đăng nhập'],
        vnuemail: user['VNU email'],
        khoadt: user['Khóa đào tạo'],
        username: user['Mã sinh viên/Tên đăng nhập'],
        password: bcrypt.hashSync(user['Mật khẩu'].toString(), bcrypt.genSaltSync(10), null)
    }).save()
    .then(callbackthen)
    .catch(callbackcatch)
}

module.exports.addAccountExcelTeacher = (user, callbackthen, callbackcatch) => {
    new Contact({
        title: 'teacher',
        name: user['Họ và tên'],
        vnuemail: user['VNU email'],
        username: user['Tên đăng nhập'],
        password: bcrypt.hashSync(user['Mật khẩu'].toString(), bcrypt.genSaltSync(10), null)
    }).save()
    .then(callbackthen)
    .catch(callbackcatch)
}

module.exports.getUser = (title, callback) => {
    Contact.find({title: title}).exec(callback)
}

module.exports.deleteUser = (username, title, callback) => {
    Contact.deleteOne({username: username, title: title}, callback)
}

module.exports.editTeacher = (username_old, title, user, callback) => {
    Contact.update({title: title, username: username_old}, {$set:{
        name: user.name,
        username: user.username,
        vnuemail: user.vnuemail,
        password: bcrypt.hashSync(user.password.toString(), bcrypt.genSaltSync(10), null)
    }}, callback)
}

module.exports.editStudent = (username_old, title, user, callback) => {
    Contact.update({title: title, username: username_old}, {$set:{
        name: user.name,
        msv: user.msv,
        vnuemail: user.vnuemail,
        khoadt: user.khoadt,
        username: user.username,
        password: bcrypt.hashSync(user.password.toString(), bcrypt.genSaltSync(10), null)
    }}, callback)
}