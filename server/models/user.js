var mongoose = require("mongoose");
var lodash = require("lodash");

var UserSchema = mongoose.Schema({
    user: {
        type:String,
        required:true
    },
    user_id: {
        type:String,
        required:true,
        unique:true
    }
})

var User = mongoose.model('Users', UserSchema);

module.exports = {
    User
};