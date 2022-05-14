const express = require("express");
const user = express();
const cors = require("cors");

user.use(cors());
user.use(express.json());
user.use(cors());

const dbo = require("../db/conn");
const bcrypt = require('bcrypt');
// This help convert the id from string to ObjectId for the _id.
const saltRounds = 10;
// get driver connection
// This section will help you create a new record.
user.route("/register").post(function (req, response) {
    let db_connect = dbo.getDb("Milestones");

    let myobj = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, saltRounds),
    };
    db_connect.collection("User").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

//login
//http://localhost:3000/login?email=testingCrypt%40gmail.com&password=hello
user.route("/login").post(function (req,res){
    let db_connect = dbo.getDb("Milestones");
    const {email,password} = req.body;
db_connect
.collection("User").findOne({email:email},(err,user)=>{
        if(!user || !bcrypt.compare(password, user.password) ){
            console.log("Wrong creds");
            res.send({message:"wrong credentials"})
        }else{
            console.log("Successfully Logged in");
        }
                
    })
});

module.exports = user;