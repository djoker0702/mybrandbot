
var mongoose = require('mongoose'); // Import Mongoose Package
var Schema = mongoose.Schema; // Assign Mongoose Schema function to variable



var WebSchema = new Schema({
    brandname: {type:String, required: true},
    url: { type: String, required: true},
    imageurl: {type : String , required: true,default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png' },
    promotion: { type: Boolean, required: true, default: false },
    phonenumber: {type: String, required :true, default: "+21699647704"},
    thepromotion : {type: String, required: true,default: "0 %"}

});






module.exports = mongoose.model('Website', WebSchema); // Export User Model for us in API