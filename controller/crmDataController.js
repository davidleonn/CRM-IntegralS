const crmData = require('../model/crmDataModel');

/**Define name of functions for the crm routes here
 * sales_form
 * expenses_form
 * sales_form_post
 * expenses_form_post
 * sales_report
 * summary_report
 */


//Sales form
const sales_form = (req, res) => res.render('../views/crm/salesForm');

const sales_form_post = (req, res) => {
    const cookies = req.cookies;
    const sale = new crmData.Sales({
        productName: req.body.productName,
        companyName: req.body.companyName,
        productQuantity: req.body.productQuantity,
        productId: req.body.productId,
        productPrice: req.body.productPrice,
        companyId: cookies.companyId,
        userId: cookies.userId
    });
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
    const expense = new crmData.Expenses(req.body);
    expense.save()
        .then(result => {
            res.redirect('/dashboard')
        })
        .catch(error => {
            res.send("expense data form fuckup")
        })
}


const sales_report = (req, res) => {
    const cookies = req.cookies;
    crmData.Sales.find({companyId : cookies.companyId})
        .then((result) => {
            res.render('../views/crm/salesReport', { sales: result })
        })
        .catch((error) => {
            console.error("couldnt get sales")
        })
}

const expenses_report = (req, res) => {
    const cookies = req.cookies;
    crmData.Expenses.find({companyId : cookies.companyId})
        .then((result) => {
            console.log(result);
            res.render('../views/crm/expensesReport', { expenses: result })
        })
        .catch((error) => {
            console.error("couldnt get expenses")
        })
}


const summary_report = (req, res) => {
    const cookies = req.cookies;
    crmData.Sales.find({companyId: cookies.companyId})
        .then((result) => {
            console.log(req.cookies);
            res.render('../views/crm/dashboard', { sales: result })
        })
        .catch((error) => {
            console.error("couldnt get sales")
        })

};

module.exports = {
    sales_form,
    sales_form_post,
    expenses_form,
    expenses_form_post,
    sales_report,
    expenses_report,
    summary_report
}

