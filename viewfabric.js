const db=require('../utils/database')
var femail;
module.exports=class Viefabric{
    constructor(fcemail)
    {
        this.fcemail=fcemail;
        console.log(this.fcemail);
    }
    save()
    {
     femail=this.fcemail
    } 
     fetchAll()
    {
    console.log(femail);
     return db.execute('select * from fabric where email="'+femail+'"');
    }
    execute()
    {
        return db.execute('update fabric set billstatus="1"  where email="'+femail+'" ')
    }
}