const db=require('../utils/database')
module.exports=class  Register{
    constructor(name,email,phone,password,company,address,gst,pan,account)
    {
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.password=password;
        this.company=company;
        this.address=address;
        this.gst=gst;
        this.pan=pan;
        this.account=account;
    }
    save()
    {
        console.log(this.name);
        db.execute("insert into customerregister(name,email,phone,password,company,address,gst,pan,account)values(?,?,?,?,?,?,?,?,?)",
  [this.name,this.email,this.phone,this.password,this.company,this.address,this.gst,this.pan,this.account]);
    }
   static fetchAll()
    {
        return db.execute('select * from customerregister');
    }
    update()
    {
        return db.execute('update customerregister set name="'+this.name+'",phone="'+this.phone+'", password="'+this.password+'",company="'+this.company+'",address="'+this.address+'",gst="'+this.gst+'",pan="'+this.pan+'",account="'+this.account+'" where email="'+this.email+'" ');
    }
}
