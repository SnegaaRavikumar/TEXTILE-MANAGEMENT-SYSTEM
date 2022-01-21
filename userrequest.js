const order=require('../models/yarn')
const Viewyarn=require('../models/viewyarn');
const Viewfabric=require('../models/viewfabric');
const Viewgarments=require('../models/viewgarments');
const Yarnprice=require('../models/yarnprice');
const fabricorder=require('../models/fabric');
const garmentsorder=require('../models/garments');
const purchases=require('../models/stocks')
const Givendate=require('../models/givendata');
const Givendatepurchase=require('../models/givendatepurchase')

exports.userrequestyarn=(req,res,next)=>{
   order.fetchAll()
   .then(([rows,fieldData])=>{
   res.render('userrequestyarn',{
     yarns:rows,
     pageTitle : 'userrequestyarn'         
    });
    })
  }
  exports.viewemail=(req,res,next)=>{
      const viewyarn=new Viewyarn(req.body.cemail);
      viewyarn.save();
     res.redirect('/admin/viewyarn') 
  }
  exports.viewyarn=(req,res,next)=>{
    const viewyarn=new Viewyarn(req.body.cemail);
    viewyarn.fetchAll()
    .then(([rows,fieldData])=>{
    res.render('viewyarn',{
      yarns:rows,
      pageTitle : 'viewyarn',
     });
   })
  .catch(err=>console.log(err));
  viewyarn.execute();
}
exports.userrequestfabric=(req,res,next)=>{
  fabricorder.fetchAll()
  .then(([rows,fieldData])=>{
  res.render('userrequestfabric',{
    fabrics:rows,
    pageTitle : 'userrequestfabric'         
   });
   })
 }
 exports.viewfabemail=(req,res,next)=>{
     const viewfabric=new Viewfabric(req.body.fcemail);
     viewfabric.save();
    res.redirect('/admin/viewfabric') 
 }
 exports.viewfabric=(req,res,next)=>{
   const viewfabric=new Viewfabric(req.body.fcemail);
   viewfabric.fetchAll()
   .then(([rows,fieldData])=>{
   res.render('viewfabric',{
     fabrics:rows,
     pageTitle : 'viewfabric',
    });
  })
 .catch(err=>console.log(err));
 viewfabric.execute();
}
exports.userrequestgarments=(req,res,next)=>{
  garmentsorder.fetchAll()
  .then(([rows,fieldData])=>{
  res.render('userrequestgarments',{
    garments:rows,
    pageTitle : 'userrequestgarments'         
   });
   })
 }
 exports.viewgaremail=(req,res,next)=>{
     const viewgarments=new Viewgarments(req.body.gcemail);
     viewgarments.save();
    res.redirect('/admin/viewgarments') 
 }
 exports.viewgarments=(req,res,next)=>{
   const viewgarments=new Viewgarments(req.body.gcemail);
   viewgarments.fetchAll()
   .then(([rows,fieldData])=>{
   res.render('viewgarments',{
     garments:rows,
     pageTitle : 'viewgarments',
    });
  })
 .catch(err=>console.log(err));
 viewgarments.execute();
}
exports.todayorder=(req,res,next)=>{
  order.currentdate()
  .then(([rows,fieldData])=>{
  fabricorder.currentdate()
  .then(([rows1,fieldData])=>{
  garmentsorder.currentdate()
  .then(([rows2,fieldData])=>{
   
    res.render('todayorder',{yarns:rows,fabrics:rows1,garments:rows2,pagetitle:'todayorder'})
  
})
})
})
}
exports.dateorders=(req,res,next)=>{
  res.render('dateorders',{pagetitle:'dateorders'});
}
exports.adddateorders=(req,res,next)=>{
  const givendate=new Givendate(req.body.date);
  givendate.save();
  givendate.givendateyarn()
  .then(([rows,fieldData])=>{
  givendate.givendatefabric()
  .then(([rows1,fieldData])=>{
  givendate.givendategarments()
  .then(([rows2,fieldData])=>{
   
    res.render('todayorder',{yarns:rows,fabrics:rows1,garments:rows2,pagetitle:'todayorder'})
  
})
})
})
}
exports.monthorders=(req,res,next)=>{
  res.render('monthlyorders',{pagetitle:'monthlyorders'});
}
exports.addmonthorders=(req,res,next)=>{
  const givendate=new Givendate(req.body.year+"-"+req.body.month);
  givendate.save();
  givendate.givenmonthyarn()
  .then(([rows,fieldData])=>{
  givendate.givenmonthfabric()
  .then(([rows1,fieldData])=>{
  givendate.givenmonthgarments()
  .then(([rows2,fieldData])=>{
   
    res.render('todayorder',{yarns:rows,fabrics:rows1,garments:rows2,pagetitle:'todayorder'})
  
})
})
})
}
exports.todaypurchase=(req,res,next)=>{
  purchases.currentdate()
  .then(([rows,fieldData])=>{
     res.render('todaypurchase',{purchases:rows,pagetitle:'todaypurchase'})
  
})
}
exports.datepurchases=(req,res,next)=>{
  res.render('datepurchases',{pagetitle:'datepurchases'});
}
exports.adddatepurchases=(req,res,next)=>{
  const givendatepurchase=new Givendatepurchase(req.body.date);
  givendatepurchase.save();
  givendatepurchase.givendatepurchase()
  .then(([rows,fieldData])=>{
   
    res.render('todaypurchase',{purchases:rows,pagetitle:'todaypurchase'})
  
})
}
exports.monthpurchases=(req,res,next)=>{
  res.render('monthlypurchases',{pagetitle:'monthlypurchases'});
}
exports.addmonthpurchase=(req,res,next)=>{
  const givendatepurchase=new Givendatepurchase(req.body.year+"-"+req.body.month);
  givendatepurchase.save();
  givendatepurchase.givenmonthpurchase()
  .then(([rows,fieldData])=>{
   
    res.render('todaypurchase',{purchases:rows,pagetitle:'todaypurchase'})
  
})
}
exports.todaysales=(req,res,next)=>{
  purchases.currentdate()
  .then(([rows,fieldData])=>{
     res.render('todaysales',{purchases:rows,pagetitle:'todaysales'})
  
})
}
exports.datesales=(req,res,next)=>{
  res.render('datesales',{pagetitle:'datesales'});
}
exports.adddatesales=(req,res,next)=>{
  const givendatepurchase=new Givendatepurchase(req.body.date);
  givendatepurchase.save();
  givendatepurchase.givendatepurchase()
  .then(([rows,fieldData])=>{
   
    res.render('todaysales',{purchases:rows,pagetitle:'today'})
  
})
}
exports.monthsales=(req,res,next)=>{
  res.render('monthlysales',{pagetitle:'monthlysales'});
}
exports.addmonthsales=(req,res,next)=>{
  const givendatepurchase=new Givendatepurchase(req.body.year+"-"+req.body.month);
  givendatepurchase.save();
  givendatepurchase.givenmonthpurchase()
  .then(([rows,fieldData])=>{
   
    res.render('todaysales',{purchases:rows,pagetitle:'todaysales'})
  
})
}