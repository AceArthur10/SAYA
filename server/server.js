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
  const email = req.body.email;
  const password = req.body.password;

  db.query(
      "SELECT id, email, password FROM test_users WHERE email = ? AND password = ?",
      [email, password],
      (err, result) => {
      if(err){
          res.send({err: err})
      }
      //if login credentials match, sends the result and logs in user
      if (result.length > 0) {
          res.send(result)
      } else{
          res.send({message: "Wrong email/password"})
      }
  })
});

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


//Tenants (add)
app.post('/create',(req,res) =>{
    const tenant = req.body.tenant
    const unit = req.body.unit
    const meter_number = req.body.meter_number
    const email = req.body.email

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

// Tenants (get)
app.get('/tenants', (req, res) =>{
    db.query("SELECT * FROM tenants", (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        };
    });
})

// Billing
app.get("/billing", (req, res) => {
    // Editable Query
    const myQuery = "SELECT * FROM charges WHERE id = 1";
    const id = req.body.id;

    db.query(myQuery, [id], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json(
            result,
          );
      }
    });
  });

// Settings
app.post("/settings", (req, res) => {
  const { userId, code, phone, account_name, invoice, first_name, last, password } = req.body;

  db.query(
  "UPDATE test_users SET country_code = ?, phone_number = ?, account_name = ?, invoice_name_prefix = ?, first_name = ?, last_name = ?, password = ? WHERE id = ?",
  [code, phone, account_name, invoice, first_name, last, password, userId],
  (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "An error occurred while updating the user." });
    } else {
      res.status(200).send({ message: "User updated successfully." });
    }
  }
);
});

app.listen(3001, () => {console.log("Server started on port 3001")})
