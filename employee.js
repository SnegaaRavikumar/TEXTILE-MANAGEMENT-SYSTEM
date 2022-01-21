const path=require('path');
const express=require('express');
const router=express.Router();

const employees=require('../controller/employees');
router.get('/',employees.employeeregister);
router.post('/',employees.addemployee);
router.get('/updateemployee',employees.updateemployee);
router.post('/updateemployee',employees.updateemployeepost);
router.post('/updateresults',employees.updateresults);
router.get('/signup',employees.signup);
router.post('/employeedetails',employees.employeedetails);
module.exports=router;