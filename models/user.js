
var mongoose = require('mongoose'); // Import Mongoose Package
var Schema = mongoose.Schema; // Assign Mongoose Schema function to variable



var UserSchema = new Schema({
    first_name: { type: String, required: true},
    last_name: { type: String,required: true,},
    fb_id: { type: String, required: true},
    profile_pic: { type: String, required: true},
    country: { type: String, required: true},
    brands: {type :Array,required:true, default : [""]}
});






module.exports = mongoose.model('User', UserSchema); // Export User Model for us in API