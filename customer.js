const path=require('path');
const express=require('express');
const router=express.Router();

const customers=require('../controller/orders');
const response=require('../controller/emailsend')
router.get('/',customers.getProduct);
router.get('/home',customers.home);
router.get('/products',customers.products);
router.get('/yarn',customers.yarn);
router.post('/yarn',customers.addyarn);
router.get('/fabric',customers.fabric);
router.post('/fabric',customers.addfabric);
router.get('/garments',customers.garments);
router.post('/garments',customers.addgarments);

router.get('/success',customers.success);
router.get('/register',customers.register);
router.post('/register',customers.addregister);
router.get('/signin',customers.signin);
router.post('/signin',customers.addsignin);
router.get('/dashboard',customers.dashboard);
router.get('/profile',customers.profile);
router.post('/profile',customers.updateresults);
router.get('/fullyarn',customers.fullyarn);
router.post('/addfullyarn',customers.addfullyarn)
router.get('/fullfabric',customers.fullfabric);
router.post('/addfullfabric',customers.addfullfabric)
router.get('/fullgarments',customers.fullgarments);
router.post('/addfullgarments',customers.addfullgarments)
router.post('/messages',customers.cusmessages);
router.post('/email',response.updateemail);


module.exports=router;
