const db=require('../utils/database')
var date;
module.exports=class GivendatePurchase{
    constructor(date)
    {
        this.date=date;
    }
    save()
    {
       date=this.date;
    } 
    givendatepurchase()
    {
        console.log(date);
        return db.execute('select * from stock where date="'+date+'" ')
    }
    givenmonthpurchase()
    {
        console.log(date);
        return db.execute('select * from stock where date like "'+date+'%" ')
    }
}