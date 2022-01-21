const db=require('../utils/database')
var email=0;
module.exports=class Profile{
    constructor(email)
    {
        this.email=email;

    }
save()
{
 email=this.email;
}
 update()
{
    return db.execute('select * from yarn where email="'+email+'"');    

}
fetch()
{
    return db.execute('select * from fabric where email="'+email+'"');    

}
fetchgarments()
{
    return db.execute('select * from garments where email="'+email+'"');    

}
}