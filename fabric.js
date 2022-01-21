const db=require('../utils/database')
var today=new Date();
const date= String(today.getFullYear())+"-"+String(today.getMonth()+1)+"-"+String(today.getDate());
module.exports=class Fabric{
    constructor(name,email,phone,company,address,gst,pan,clothe,color,quantity,date,regular,orderingdate)
    {
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.company=company;
        this.address=address;
        this.gst=gst;
        this.pan=pan;
        this.clothe=clothe;
        this.color=color
        this.quantity=quantity;
        this.date=date;
        this.regular=regular;
        this.orderingdate=orderingdate;
        console.log(this.name);
    }
    save()
    {
        console.log(this.name);
        db.execute("insert into fabric(name,email,phone,company,address,gst,pan,clothe,color,quantity,date,regularintervals,orderingdate)values(?,?,?,?,?,?,?,?,?,?,?,?,?)",
  [this.name,this.email,this.phone,this.company,this.address,this.gst,this.pan,this.clothe,this.color,this.quantity,this.date,this.regular,this.orderingdate]);
    }

    
    static fetchAll()
    {
     return db.execute('select * from fabric where billstatus="0"');
    }
    static currentdate()
    {
        return db.execute('select * from fabric where orderingdate="'+date+'"')
    }
}
