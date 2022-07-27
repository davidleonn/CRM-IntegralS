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
    productQuantity:{
        type: Number,
        required: true
    },
    productId:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    companyId:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    }

}, {timestamps: true});


const expensesSchema = new Schema ({
    productName:{
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true
    },
    productQuantity:{
        type: String,
        required: true
    },
    productID:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    companyId:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    }

}, {timestamps: true});

const summarySchema = new Schema ({
    
})

const Sales = mongoose.model('Sales', salesSchema);
const Expenses = mongoose.model('Expenses', expensesSchema);

module.exports = {
    Sales, 
    Expenses
}
