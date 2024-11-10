const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

require('dotenv').config()
const port = process.env.port || 5000

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'student_info',
    port:4306
})

//console.log(db)

app.get( '/' , (req , res)=>{
   const q = "SELECT * FROM student";
   db.query(q , (err , result)=>{
    if(err) return res.status(400).json({message:'Error'})
    res.status(200).json(result)
   })
})

app.post('/add', (req,res) => {
    const values = [req.body.name,req.body.email,req.body.age,req.body.status];
    const q = "INSERT INTO student (name,email,age,status) VALUES (?)";
    db.query( q , [values] , (err , result) => {
        if(err) return res.status(400).json({message:'Error'})
        res.status(200).json({message:'Profile added'})
    })
})

app.put('/update/:id', (req, res) => {
    const q = "UPDATE student SET `name`=?, `email`=?, `age`=?, `status`=? WHERE id=?";
    const values = [req.body.name,req.body.email,req.body.age,req.body.status];
    const id = req.params.id;
    db.query(q,[...values,id],(err,result)=>{
        if(err) return res.status(400).json({message:'Error'})
        res.status(200).json({message:'Profile Updated'})
    })
})

app.delete('/delete/:id', (req,res)=>{
    const q = "DELETE FROM student WHERE id = ?";
    const id = req.params.id;
    db.query(q,[id],(err, result)=>{
        if(err) return res.status(400).json({message:'Error'})
        res.status(200).json({message:'Profile Deleted'})
    })
})

app.listen(port , ()=>{
    console.log(`Server is running at ${port}`)
})
