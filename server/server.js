const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "138.128.247.85",
    password: "Saya2023team13",
    database: "sys"
})

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        (err, result) => {
        console.log(err);
    })
});


app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
        if(err){
            res.send({err: err})
        }

        if (result.length > 0) {
            res.send(result)
        } else{
            res.send({message: "Wrong username/password"})
        }
    })
});

app.post("/settings", (req, res) => {
    const { code, phone, account_name, invoice, first_name, last, password } = req.body;

    db.query(
        "UPDATE test_users SET country_code = ?, phone_number = ?, account_name = ?, invoice_name_prefix = ?, first_name = ?, last_name = ?, password = ? WHERE id = 1",
        [code, phone, account_name, invoice, first_name, last, password],
        (err, result) => {
        console.log(err);
    })

})

app.listen(3001, () => {console.log("Server started on port 3001")})
