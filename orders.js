const Yarn=require('../models/yarn');
const Fabric=require('../models/fabric');
const registers=require('../models/register');
const Garments=require('../models/garments')
const Profile=require('../models/profile');
const Cusmessage=require('../models/customermessages');
let alert=require('alert');
var today=new Date();
const date= String(today.getFullYear())+"-"+String(today.getMonth()+1)+"-"+String(today.getDate());
var uname=null,uemail=null,uphone=null;
exports.getProduct=(req,res,next)=>{
   res.render('onetime',{pageTitle : 'onetime'}); 
   next();
 }
exports.products=(req,res,next)=>{
  res.render('products',{ pageTitle:'products'});
}
exports.yarn=(req,res,next)=>{
  res.render('yarn',{ pageTitle:'yarn'});
 }

exports.addyarn=(req,res,next)=>{
  console.log(req.body.name);
  const yarn=new Yarn(req.body.name,req.body.email,req.body.phone,req.body.company,req.body.address,req.body.gst,req.body.pan,req.body.cotton,req.body.cottonpercent,req.body.polysterpercent,req.body.quantity,req.body.date,"",date);
  yarn.save();
  res.redirect('/customer/success')
}
exports.success=(req,res,next)=>{
  res.render('success',{ pageTitle:'success'});
}
exports.fabric=(req,res,next)=>{
  res.render('fabric',{ pageTitle:'fabric'});

}
exports.addfabric=(req,res,next)=>{
  console.log(req.body.name);
  const fabric=new Fabric(req.body.name,req.body.email,req.body.phone,req.body.company,req.body.address,req.body.gst,req.body.pan,req.body.clothe,req.body.color,req.body.quantity,req.body.date,"",date);
  fabric.save();
  res.redirect('/customer/success');
}
exports.garments=(req,res,next)=>{
  res.render('garments',{ pageTitle:'garments'});
 }

exports.addgarments=(req,res,next)=>{
  console.log(req.body.name);
  const garments=new Garments(req.body.name,req.body.email,req.body.phone,req.body.company,req.body.address,req.body.gst,req.body.pan,req.body.material,req.body.description,req.body.pieces,req.body.date,"",date);
  garments.save();
  res.redirect('/customer/success')
}
exports.register=(req,res,next)=>{
  res.render('customerregister',{ pageTitle:'register'}); 
  
  

}
exports.home=(req,res,next)=>{
  res.render('home',{ pageTitle:'home'}); 
  

}
exports.addregister=(req,res,next)=>{
  const register=new registers(req.body.rname,req.body.remail,req.body.rphone,req.body.rpassword,"","","","","");
  register.save();
  res.redirect('/customer/signin');
}
exports.signin=(req,res,next)=>{
  res.render('signin',{ pageTitle:'signin'}); 
}
exports.addsignin=(req,res,next)=>{
  var sum=0;
  registers.fetchAll()
   .then(([rows,fieldData])=>{
      for(let row of rows){
        
        if(row.email==req.body.semail && row.password==req.body.spassword)
        {
          uname=row.name;
          uemail=row.email;
          uphone=row.phone;
          sum=sum+1;
          res.redirect('/customer/dashboard');
          
      }
     
    }
    if(sum==0)
    {
      alert("Emailid or password is incorrect")
    }
   })

  .catch(err=>console.log(err));
}
exports.dashboard=(req,res,next)=>{
  var count=0,count1=0,count2=0;
  const profiles=new Profile(uemail);
  profiles.save()
  console.log(uemail);
  profiles.update()
  .then(([rows,fieldData])=>{
    for(let row of rows){
    console.log(count);
    count=count+1;
    console.log(count);
    }
    console.log(uname);
    profiles.fetch()
  .then(([rows1,fieldData])=>{
    for(let row of rows1){
   
    count1=count1+1;
    console.log(count1);
    }
    profiles.fetchgarments()
  .then(([rows2,fieldData])=>{
    for(let row of rows2){
   
    count2=count2+1;
    console.log(count2);
    }
    res.render('dashboard',{name:uname,memail:uemail,orders:count+count1+count2,orderresult:rows,fabrics:rows1,garments:rows2,pagetitle:'dashboard'})
  
})
.catch(err=>console.log(err));

})
.catch(err=>console.log(err));

})
.catch(err=>console.log(err));
}




exports.profile=(req,res,next)=>{
  registers.fetchAll()
  .then(([rows,fieldData])=>{
    for(let row of rows){
       if(row.email==uemail)
       {
        res.render('profile',{name:row.name,email:row.email,phone:row.phone,password:row.password,company:row.company,address:row.address,gst:row.gst,pan:row.pan,account:row.account,pagetitle:'profile'})
       }
      }
    })
 
   .catch(err=>console.log(err));
}
exports.updateresults=(req,res,next)=>{
  console.log(req.body.name);
  const register=new registers(req.body.rname,req.body.remail,req.body.rphone,req.body.rpassword,req.body.rcompany,req.body.raddress,req.body.rgst,req.body.rpan,req.body.raccount);
  register.update();
  res.redirect('/customer/profile')
}
exports.fullyarn=(req,res,next)=>{
  registers.fetchAll()
  .then(([rows,fieldData])=>{
    for(let row of rows){
       if(row.email==uemail)
       {
  res.render('fullyarn',{name:row.name,email:row.email,phone:row.phone,password:row.password,company:row.company,address:row.address,gst:row.gst,pan:row.pan,account:row.account,pagetitle:'fullyarn'});
}
}
})

.catch(err=>console.log(err));
}

exports.addfullyarn=(req,res,next)=>{
  console.log(req.body.name);
  const yarn=new Yarn(req.body.name,req.body.email,req.body.phone,req.body.company,req.body.address,req.body.gst,req.body.pan,req.body.cotton,req.body.cottonpercent,req.body.polysterpercent,req.body.quantity,"",req.body.regular,date);
  yarn.save();
  res.redirect('/customer/success')
}
exports.fullfabric=(req,res,next)=>{
  registers.fetchAll()
  .then(([rows,fieldData])=>{
    for(let row of rows){
       if(row.email==uemail)
       {
  res.render('fullfabric',{name:row.name,email:row.email,phone:row.phone,password:row.password,company:row.company,address:row.address,gst:row.gst,pan:row.pan,account:row.account});
}
}
})

.catch(err=>console.log(err));
}

exports.addfullfabric=(req,res,next)=>{
  console.log(req.body.name);
  const fabric=new Fabric(req.body.name,req.body.email,req.body.phone,req.body.company,req.body.address,req.body.gst,req.body.pan,req.body.clothe,req.body.color,req.body.quantity,"",req.body.regular,date);
  fabric.save();
  res.redirect('/customer/success')
}
exports.fullgarments=(req,res,next)=>{
  registers.fetchAll()
  .then(([rows,fieldData])=>{
    for(let row of rows){
       if(row.email==uemail)
       {
  res.render('fullgarments',{name:row.name,email:row.email,phone:row.phone,password:row.password,company:row.company,address:row.address,gst:row.gst,pan:row.pan,account:row.account,pagetitle:'fullgarments'});
}
}
})

.catch(err=>console.log(err));
}
exports.addfullgarments=(req,res,next)=>{
  console.log(req.body.name);
  const garments=new Garments(req.body.name,req.body.email,req.body.phone,req.body.company,req.body.address,req.body.gst,req.body.pan,req.body.material,req.body.description,req.body.pieces,"",req.body.regular,date);
  garments.save();
  res.redirect('/customer/success')
}

exports.cusmessages=(req,res,next)=>{
  const messages=new Cusmessage(req.body.memail,req.body.message);
  messages.save();
  alert('Message have been sent');
}

