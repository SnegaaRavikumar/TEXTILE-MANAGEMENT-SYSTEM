const db=require('../utils/database')
module.exports=class Reorder{
    constructor(sid,dailyusage)
    {
      this.sid=sid;
      this.dailyusage=dailyusage;
      
    }
    update()
        {
         db.execute('update reorder set squantity=squantity - "'+this.dailyusage+'" where sid="'+this.sid+'"');
        }  
    fetchall()
        {
            return db.execute('select * from reorder where sid="'+this.sid+'"');
        }
}