const db=require('../utils/database')
var email;
module.exports=class Cusmessage{
    constructor(memail,message)
    {
        this.memail=memail;
        this.message=message;
    }
    save()
    {
        console.log(this.memail);
     db.execute("insert into cusmessages(email,message)values(?,?)", [this.memail,this.message]);
    } 
    static fetchAll()
    {
        return db.execute("select * from cusmessages");
    }
    
}