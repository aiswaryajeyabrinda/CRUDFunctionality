const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost:3307",
    user: "root",
    password: "",
    database: "crud"
})

app.get('/', (req, res) => {
    const sql = "select * from user";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.post('/create', (req, res) => {
    const sql = "INSERT INTO user(name, email, mobileNumber, dateOfBirth) VALUES (?)";
    const values = [req.body.name,req.body.email,req.body.mobileNumber,req.body.dateOfBirth]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);    
    })
})
app.put('/update/:mobileNumber', (req, res) => {
    const sql = "update user set name = ?, email = ? set mobileNumber = ?, set dateOfBirth = ? where ID = ?";
    const values = [req.body.name,req.body.email,req.body.mobileNumber,req.body.dateOfBirth]
    const mobileNumber = req.params.mobileNumber;
    db.query(sql, [...values, mobileNumber], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.delete('/user/:mobileNumber', (req, res) => {
    const sql = "DELETE FROM user WHERE mobileNumber = ?";
    const mobileNumber= req.params.mobileNumber;
    db.query(sql, [mobileNumber], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8083, () => {
        console.log("listening");
    })