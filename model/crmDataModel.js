const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const salesSchema = new Schema ({
    productName:{
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    productID:{
        type: String,
        required: true
    },

}, {timestamps: true});

const Sales = mongoose.model('Sales', salesSchema);

const expensesSchema = new Schema ({
    productName:{
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    productID:{
        type: String,
        required: true
    },

}, {timestamps: true});

const Expenses = mongoose.model('Expenses', expensesSchema);

module.exports = {
    Sales, 
    Expenses
}
