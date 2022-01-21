exports.date=(req,res,next)=>{
var today=new Date();
return String(today.getDate()) +String(today.getDate())+String(today.getDate());
}