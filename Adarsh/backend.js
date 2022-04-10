const express=require("express")
const mysql=require("mysql")

const mnRoute=express.Router();

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"record"
})


mnRoute.get("/show",(req,res)=>{
    db.getConnection((err,connection)=>{
        if(err){
            console.log(err);
        }else{
            const insert_qu="SELECT * FROM RECORDS"
            connection.query(insert_qu,(err,result)=>{
                if(err) throw err
                console.log("result",result);
                res.json({
                    message:"Query Executed",
                    records:result

                })
                connection.release()
            })
        }

    })
})

mnRoute.get("/ascend",(req,res)=>{
    db.getConnection((err,connection)=>{
        if(err){
            console.log(err);
        }else{
            const insert_qu="SELECT * FROM RECORDS ORDER BY AGE "
            connection.query(insert_qu,(err,result)=>{
                if(err) throw err
                console.log("result",result);
                res.json({
                    message:"Query Executed",
                    records:result

                })
                connection.release()
            })
        }

    })
})

mnRoute.get("/desc",(req,res)=>{
    db.getConnection((err,connection)=>{
        if(err){
            console.log(err);
        }else{
            const insert_qu="SELECT * FROM RECORDS ORDER BY AGE DESC "
            connection.query(insert_qu,(err,result)=>{
                if(err) throw err
                console.log("result",result);
                res.json({
                    message:"Query Executed",
                    records:result

                })
                connection.release()
            })
        }

    })
})
  
mnRoute.post("/save",(req,res)=>{
    let id=req.body.id
    let name=req.body.name
    let age=req.body.age
    let email=req.body.email
    db.getConnection((err,connection)=>{
        if(err){
            console.log(err);
        }else{
            const insert_qu="INSERT INTO RECORDS(id,name,age,email) VALUES(?,?,?,?)"
            const insert=mysql.format(insert_qu,[id,name,age,email])
            connection.query(insert,(err,result)=>{
                if(err) throw err
                console.log("result",result);
                res.json({
                    message:"Query Executed"

                })
                connection.release()
            })
        }

    })
})

mnRoute.patch("/update",(req,res)=>{
    let id=req.body.id
    let name=req.body.name
    let age=req.body.age
    let email=req.body.email
    db.getConnection((err,connection)=>{
        if(err){
            console.log(err);
        }else{
            const insert_qu=`UPDATE RECORDS SET name='${name}', age='${age}', email='${email}' WHERE ID ='${id}'`
            // const insert=mysql.format(insert_qu,[id,name,age,email])
            connection.query(insert_qu,(err,result)=>{
                if(err) throw err
                console.log("result",result);
                res.json({
                    message:"Query Executed"

                })
                connection.release()
            })
            // console.log(insert_qu);
        }

    })
})

mnRoute.delete("/del",(req,res)=>{
    let id=req.body.id
   
    db.getConnection((err,connection)=>{
        if(err){
            console.log(err);
        }else{
            const insert_qu=`DELETE FROM RECORDS WHERE ID ='${id}'`
            // const insert=mysql.format(insert_qu,[id,name,age,email])
            connection.query(insert_qu,(err,result)=>{
                if(err) throw err
                console.log("result",result);
                res.json({
                    message:"Query Executed"

                })
                connection.release()
            })
            // console.log(insert_qu);
        }

    })
})




module.exports=mnRoute