const crmData = require('../model/crmDataModel');

/**Define name of functions for the crm routes here
 * sales_form
 * expenses_form
 * sales_form_post
 * expenses_form_post
 * 
 */
//Sales form
 const sales_form = (req, res) => res.render('sales');

 const sales_form_post = (req, res) => {
    console.log(req.body);
    const sale = new crmData.Sales(req.body);
    sale.save()
        .then(result => {
            res.redirect('/dashboard')
        })
        .catch(error => {
            console.log(error)
        })
 }

//Sales form
const expenses_form = (req, res) => res.render('expenses');

const expenses_form_post = (req, res) => {
    console.log(req.body);
    const expense = new crmData.Expenses(req.body);
    expense.save()
        .then(result => {
            res.redirect('/dashboard')
        })
        .catch(error => {
            console.log(error)
        })
 }