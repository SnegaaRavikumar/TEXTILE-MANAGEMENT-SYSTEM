const db=require('../utils/database')
var today=new Date();
const date= String(today.getFullYear())+"-"+String(today.getMonth()+1)+"-"+String(today.getDate());
module.exports=class Yarn{
    constructor(name,email,phone,company,address,gst,pan,material,description,pieces,date,regular,orderingdate)
    {

        this.name=name;
        this.email=email;
        this.phone=phone;
        this.company=company;
        this.address=address;
        this.gst=gst;
        this.pan=pan;
        this.material=material;
        this.description=description;
        this.pieces=pieces;
        this.date=date;
        this.regular=regular;
        this.orderingdate=orderingdate;
        console.log(this.orderingdate)
    }
    save()
    {
        db.execute("insert into garments(name,email,phone,company,address,gst,pan,material,description,pieces,date,regular,orderingdate)values(?,?,?,?,?,?,?,?,?,?,?,?,?)",
  [this.name,this.email,this.phone,this.company,this.address,this.gst,this.pan,this.material,this.description,this.pieces,this.date,this.regular,this.orderingdate]);
    }

static fetchAll()
    {
     return db.execute('select * from garments where billstatus="0"')
    
    }
  static  currentdate()
    {
        console.log(date)
        return db.execute('select * from garments where orderingdate="'+date+'"')
    }
}
