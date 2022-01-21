const Stock=require('../models/stocks');
const Cusmessage=require('../models/customermessages');
const Reorder=require('../models/reorder')
const Reorderlevel=require('../models/reorderlevel')
let alert=require('alert')
const Updatestock=require('../models/updatestocks')
var today=new Date();
const date= String(today.getFullYear())+"-"+String(today.getMonth()+1)+"-"+String(today.getDate());
var sname=0;
var suppliername=0;
exports.addreorder=(req,res,next)=>{
  res.render('addreorder',{ pageTitle:'addreorder'}); 
}
exports.addreorderdetails=(req,res,next)=>{
  console.log(req.body.sname);
  const reorder=new Reorder(req.body.sid,req.body.sname,req.body.reorder);
  reorder.save();
  res.redirect('/admin/addreorder')
}
exports.addstocks=(req,res,next)=>{
    res.render('addstocks',{ pageTitle:'addstocks'}); 
  }
  exports.addstocksdetails=(req,res,next)=>{
    console.log(req.body.name);
    const stock=new Stock(req.body.sid,req.body.sname,req.body.quantity,req.body.price,req.body.suppliername,req.body.supplierphno,req.body.supplieraddress,date);
    stock.save();
    stock.update();
    res.redirect('/admin/addstocks')
  }
  exports.updatestocks=(req,res,next)=>{                   
    res.render('updatestocks',{ pageTitle:'updatestocks'}); 
}
  exports.updatestockspost=(req,res,next)=>{
    Stock.fetchall()
    .then(([rows,fieldData])=>{
      for(let row of rows){
        var count=0;
       if(row.sname==req.body.sname && row.suppliername==req.body.suppliername)
        {
          sname=row.sname;
          suppliername=row.suppliername;
          count=count+1;
          const updatestock=new Updatestock(sname,suppliername);
    updatestock.save();
    updatestock.fetchAll()
    .then(([rows,fieldData])=>{
    res.render('updatestocks1',{
      stock:rows,
      pageTitle : 'updatestock1',
     });
   })
  .catch(err=>console.log(err));
       }}
       if(count==0)
       {
         alert("Emailid or password is incorrect")
         
       }
      });
  }

  exports.updatedailyusage=(req,res,next)=>{
    var reorder=0;
    const reorderlevel=new Reorderlevel(req.body.sid,req.body.dailyusage);
    reorderlevel.update();
    reorderlevel.fetchall()
    .then(([rows,fieldData])=>{
      for(let row of rows){
         if(row.squantity===row.reorder || row.squantity<row.reorder)
         {
           reorder=reorder+1;
           console.log(reorder)
          }}
       if(reorder>0)
       {
         alert("The product has arrived the reorder level.Please purchase goods ")
       }
       res.redirect('/admin/updatestocks')
      })
    .catch(err=>console.log(err));
   
 }
  exports.adminmessages=(req,res,next)=>{
    Cusmessage.fetchAll()
    .then(([rows,fieldData])=>{
    res.render('adminmessages',{ pageTitle : 'adminmessages',messages:rows,
         });
        })
        .catch(err=>console.log(err));
             }
  
