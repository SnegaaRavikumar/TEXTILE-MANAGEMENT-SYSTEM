const Employee=require('../models/employee');
let alert=require('alert')
const Updateemployee=require('../models/updateemployee')
var email=0;
var eemail=0;
exports.employeeregister=(req,res,next)=>{
    res.render('employeeregister',{ pageTitle:'employeeregister'}); 
  }
  exports.addemployee=(req,res,next)=>{
    console.log(req.body.name);
    const employee=new Employee(req.body.ename,req.body.eemail,req.body.ephone,req.body.epassword,req.body.eaddress,req.body.edesignation,req.body.ehours,req.body.esalary,req.body.ebonus);
    employee.save();
    res.redirect('/employee')
  }
  exports.updateemployee=(req,res,next)=>{                   
    res.render('updateemployee',{ pageTitle:'updateemployee'}); 
    
  
  }
  exports.updateemployeepost=(req,res,next)=>{
    Employee.fetchall()
    .then(([rows,fieldData])=>{
      for(let row of rows){
        var count=0;
       if(row.email==req.body.eemail)
        {
          email=row.email;
          count=count+1;
          const updateemployee=new Updateemployee(email);
    updateemployee.save();
    updateemployee.fetchAll()
    .then(([rows,fieldData])=>{
    res.render('updateemployee1',{
      employee:rows,
      pageTitle : 'updateemployee1',
     });
   })
  .catch(err=>console.log(err));
       }}
       if(count==0)
       {
         alert("Emailid or password is incorrect")
         res.render('error',{ pageTitle : 'error',
         });
       }
      });
  }

  exports.updateresults=(req,res,next)=>{
    console.log(req.body.name);
    const employee=new Employee(req.body.ename,req.body.eemail,req.body.ephone,req.body.epassword,req.body.eaddress,req.body.edesignation,req.body.ehours,req.body.esalary,req.body.ebonus);
    employee.update();
    res.redirect('/employee/updateemployee')
  }
  exports.signup=(req,res,next)=>{
    res.render('employeesignin',{
      pageTitle : 'employeesignin',
     });
  }
  exports.employeedetails=(req,res,next)=>{
    Employee.fetchall()
    .then(([rows,fieldData])=>{
      for(let row of rows){
        var count=0;
       if(row.email==req.body.eemail && row.password==req.body.epassword)
        {
          eemail=row.email;
          count=count+1;
          const updateemployee=new Updateemployee(eemail);
    updateemployee.save();
    updateemployee.fetchAll()
    .then(([rows,fieldData])=>{
    res.render('employeedetails',{
      employee:rows,
      pageTitle : 'employeedetails',
     });
   })
  .catch(err=>console.log(err));
       }}
       if(count==0)
       {
         alert("Emailid or password is incorrect")
         res.render('error',{ pageTitle : 'error',
         });
       }
      });
    
  }
 