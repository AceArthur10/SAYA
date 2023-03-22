const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()

app.use(express.json()); //exports results to json 
app.use(cors()); //cross resource sharing

//Create Connection
const db = mysql.createConnection({
    user: "root",
    host: "138.128.247.85",
    password: "Saya2023team13",
    database: "sys"
})

// Registration
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

// Login
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
})

// Notifications
app.get("/notifications", (req, res) => {
    // Editable Query
    const myQuery = "select * from notifications";

    db.query(myQuery, (err, result) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json({
            result,
          });
      }
    });
  });

app.listen(3001, () => {console.log("Server started on port 3001")})