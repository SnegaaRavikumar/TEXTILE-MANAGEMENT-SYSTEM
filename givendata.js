const db=require('../utils/database')
var date;
module.exports=class Givendate{
    constructor(date)
    {
        this.date=date;
    }
    save()
    {
       date=this.date;
    } 
    givendateyarn()
    {
        console.log(date);
        return db.execute('select * from yarn where orderingdate="'+date+'" ')
    }
    givendatefabric()
    {
        return db.execute('select * from fabric where orderingdate="'+date+'" ')
    }
    givendategarments()
    {
        return db.execute('select * from garments where orderingdate="'+date+'" ')
    }
    givenmonthyarn()
    {
        console.log(date);
        return db.execute('select * from yarn where orderingdate like "'+date+'%" ')
    }
    givenmonthfabric()
    {
        return db.execute('select * from fabric where orderingdate like "'+date+'%" ')
    }
    givenmonthgarments()
    {
        return db.execute('select * from garments where orderingdate like "'+date+'%" ')
    }
}