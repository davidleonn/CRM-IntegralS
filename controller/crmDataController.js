const crmData = require('../model/crmDataModel');

/**Define name of functions for the crm routes here
 * sales_form
 * expenses_form
 * sales_form_post
 * expenses_form_post
 * 
 */


//Sales form
 const sales_form = (req, res) => res.render('../views/crm/salesForm');

 const sales_form_post = (req, res) => {
    console.log(req.body);
    const sale = new crmData.Sales(req.body);
    sale.save()
        .then(result => {
            res.redirect('/dashboard')
        })
        .catch(error => {
            res.send("sales data form fuckup")
        })
 }

//Sales form
const expenses_form = (req, res) => res.render('../views/crm/expensesForm');

const expenses_form_post = (req, res) => {
    console.log(req.body);
    const expense = new crmData.Expenses(req.body);
    expense.save()
        .then(result => {
            res.redirect('/dashboard/enter-data/expenses/post')
        })
        .catch(error => {
            console.log(error)
        })
 }

 module.exports = {
    sales_form,
    sales_form_post,
    expenses_form,
    expenses_form_post
 }