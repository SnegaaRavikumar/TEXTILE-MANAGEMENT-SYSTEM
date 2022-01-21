const db=require('../utils/database')
var email;
module.exports=class updateemployee{
    constructor(eemail)
    {
        this.eemail=eemail;
        console.log(this.eemail);
    }
    save()
    {
     email=this.eemail
    } 
     fetchAll()
    {
    console.log(email);
     return db.execute('select * from employee where email="'+email+'"');
    }
}