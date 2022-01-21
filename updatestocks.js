const db=require('../utils/database')
var sname=0;
var suppliername=0;
module.exports=class updateemployee{
    constructor(sname,suppliername)
    {
       this.sname=sname;
       this.suppliername=suppliername;
    }
    save()
    {
    sname=this.sname;
    suppliername=this.suppliername;
    } 
     fetchAll()
    {
     return db.execute('select * from stock where sname="'+sname+'" AND suppliername="'+suppliername+'"')
    }
}