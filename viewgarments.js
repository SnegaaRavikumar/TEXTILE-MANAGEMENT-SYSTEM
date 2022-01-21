const db=require('../utils/database')
var email;
module.exports=class Viewgarments{
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
     return db.execute('select * from garments where email="'+email+'"');
    }
    execute()
    {
        return db.execute('update garments set billstatus="1"  where email="'+email+'" ')
    }
}