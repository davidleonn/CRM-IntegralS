const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workerSchema  = new Schema ({
    companyid:{
        type: Number,
        required: true
    },
    telephone:{
        type: String,
        required: true
    },
    Name:{
        type: String,
        required: true
    },
    Apellido:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    facebook_id:{
        type: String,
        required: true
    },
    google_id:{
        type: String,
        required: true
    },
    
    


});


const Worker =mongoose.model('Worker', workerSchema);
module.exports = Worker;