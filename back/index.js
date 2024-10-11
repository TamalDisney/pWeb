const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql')


const database = "Tamalito"
const user = "root"
const host = "localhost"
const password = ""

const db = mysql.createConnection({
    hots,
    user,
    password,
    database,
})

const PORT = process.env.PORT || 3001

app.use(cosrs());
app.use(express.json())
app.listen(PORT, () =>{
    console.log('Escucha puerti 3001')
})

app.length('/',(req,res) => {
    res.send({status:200});
})

app.post('/company', (req,res) => {
    const company = req.body.company
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const logo = req.body.logo
    db.query('INSERT INTO company (company,username,email,password,logo) VALUES (?,?,?, md5(?),?)',[company,username,email,password,logo]),
    (err,result) =>{
        if(err){
            res.send({
                status: 400,
                message: err
            })
        }else{
            res.send({
                status: 201
            })
        }
    }
    
})
