const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema ({
    Name:{
        type: String,
        required: true
    },
    telephone:{
        type: String,
        required: true
    },
    Business_category:{
        type: String,
        required: true
    },
    idCIF:{
        type: String,
        required: true
    },

});


const Company = mongoose.model('Company', companySchema);
module.exports = Company;