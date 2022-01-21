const db=require('../utils/database')
var ccotton,cpercent,ppercent;
module.exports=class PriceYarn{
    constructor(cotton,cottonpercent,polysterpercent)
    {
        this.cotton=cotton;
        this.cottonpercent=cottonpercent;
        this.polysterpercent=polysterpercent;
    }
    save()
    {

       ccotton=this.cotton;
       cpercent=this.cottonpercent;
       ppercent=this.polysterpercent;
     
    }
    static fetchAll()
    {
        return db.execute('select price where cotton="'+ccotton+'",cottonpercent="'+cpercent+'",polysterpercent="'+ppercent+'"');
    }
}