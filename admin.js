const path=require('path');
const express=require('express');
const router=express.Router();

const customers=require('../controller/userrequest');
const stocks=require('../controller/stocks');


router.get('/userrequestyarn',customers.userrequestyarn);
router.post('/userrequestyarn',customers.viewemail);
router.get('/viewyarn',customers.viewyarn);
router.get('/userrequestfabric',customers.userrequestfabric);
router.post('/userrequestfabric',customers.viewfabemail);
router.get('/viewfabric',customers.viewfabric);
router.get('/userrequestgarments',customers.userrequestgarments);
router.post('/userrequestgarments',customers.viewgaremail);
router.get('/viewgarments',customers.viewgarments);
router.get('/addreorder',stocks.addreorder)
router.post('/addreorder',stocks.addreorderdetails)
router.get('/addstocks',stocks.addstocks)
router.post('/addstocks',stocks.addstocksdetails)
router.get('/updatestocks',stocks.updatestocks)
router.post('/updatestocks',stocks.updatedailyusage);
router.get('/todayorders',customers.todayorder);
router.get('/dateorders',customers.dateorders);
router.post('/dateorders',customers.adddateorders);
router.get('/monthorders',customers.monthorders);
router.post('/monthorders',customers.addmonthorders);
router.get('/todaypurchase',customers.todaypurchase);
router.get('/datepurchase',customers.datepurchases);
router.post('/datepurchase',customers.adddatepurchases);
router.get('/monthpurchase',customers.monthpurchases);
router.post('/monthpurchases',customers.addmonthpurchase);
router.get('/todaysales',customers.todaysales);
router.get('/datesales',customers.datesales);
router.post('/datesales',customers.adddatesales);
router.get('/monthsales',customers.monthsales);
router.post('/monthsales',customers.addmonthsales);
router.get('/messages',stocks.adminmessages);

module.exports=router;