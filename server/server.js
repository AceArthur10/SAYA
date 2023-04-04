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
        res.json(
            result,
          );
      }
    });
  });


//Tenants
//sending'connecting data from front end to back
app.post('/create',(req,res) =>{
    const tenant = req.body.tenant
    const unit = req.body.unit
    const meter_number = req.body.meter_number
    const email = req.body.email
// Setting up our query for adding a new tenant...might not need/ is not needed currently
    db.query('INSERT INTO tenants (tenant, unit, meter_number, email) VALUES(?,?,?,?)',
    [tenant,unit,meter_number,email], 
    (err,result) =>{
        if (err){
            console.log(err)
        }else{
            res.send("Values inserted correctly")
        }
    });

});

app.get('/tenants', (req, res) =>{
    db.query("SELECT * FROM tenants", (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        };
    });
})

app.listen(3001, () => {console.log("Server started on port 3001")})