const db=require('../utils/database')
var email;
module.exports=class Viewyarn{
    constructor(cemail)
    {
        this.cemail=cemail;
        console.log(this.cemail);
    }
    save()
    {
     email=this.cemail
    } 
     fetchAll()
    {
    console.log(email);
     return db.execute('select * from yarn where email="'+email+'"');
    }
    execute()
    {
        return db.execute('update yarn set billstatus="1"  where email="'+email+'" ')
    }
}