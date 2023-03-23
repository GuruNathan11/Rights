var mongoose = require('mongoose');
var { Schema } = mongoose;

var Schema = new Schema({
    companyName:{
        required : true,
        type     : String
    },
    rightsRatio:{
        required : true,
        type     : String
    },
    fv:{
        required : true,
        type     : Number
    },
    premium:{
        required : true,
        type     : Number
    },
    announcement:{
        required : true,
        type     : String
    },
    record:{
        required : true,
        type     : String
    },
    ex_rights:{
        required : true,
        type     : String
    }
    
},{versionKey:false});

Schema.path('companyName').validate(async (companyName) => {
    const nameCount = await mongoose.models.company.countDocuments({ companyName })
    return !nameCount
},'Name already Exists');


var users = module.exports = mongoose.model('company',Schema);
module.exports.get = function(callback,limit){
    users.find(callback).limit(limit);
}
