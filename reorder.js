const db=require('../utils/database')
module.exports=class Reorder{
    constructor(sid,sname,reorder)
    {
      this.sid=sid;
      this.sname=sname;
      this.reorder=reorder;
      console.log(this.sid);
      console.log(this.sname);
      console.log(this.reorder);
    }
    save()
    {
        db.execute("insert into reorder(sid,sname,reorder)values(?,?,?)",
  [this.sid,this.sname,this.reorder]);
    }
}