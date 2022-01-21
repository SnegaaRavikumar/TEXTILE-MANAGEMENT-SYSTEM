const db=require('../utils/database')
var today=new Date();
const date= String(today.getFullYear())+"-"+String(today.getMonth()+1)+"-"+String(today.getDate());
module.exports=class Yarn{
    constructor(name,email,phone,company,address,gst,pan,cotton,cottonpercent,polysterpercent,quantity,date,regular,orderingdate)
    {

        this.name=name;
        this.email=email;
        this.phone=phone;
        this.company=company;
        this.address=address;
        this.gst=gst;
        this.pan=pan;
        this.cotton=cotton;
        this.cottonpercent=cottonpercent;
        this.polysterpercent=polysterpercent;
        this.quantity=quantity;
        this.date=date;
        this.regular=regular;
        this.orderingdate=orderingdate;
        console.log(this.orderingdate)
    }
    save()
    {
        db.execute("insert into yarn(name,email,phone,company,address,gst,pan,cotton,cottonpercent,polysterpercent,quantity,date,regular,orderingdate)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
  [this.name,this.email,this.phone,this.company,this.address,this.gst,this.pan,this.cotton,this.cottonpercent,this.polysterpercent,this.quantity,this.date,this.regular,this.orderingdate]);
    }

static fetchAll()
    {
     return db.execute('select * from yarn where billstatus="0"')
    
    }
static   currentdate()
    {
        console.log(date)
        return db.execute('select * from yarn where orderingdate="'+date+'"')
    }
}
