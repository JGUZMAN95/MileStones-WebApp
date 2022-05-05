const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const providerRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");
const bcrypt = require('bcryptjs');
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
//need to get inform search bar
providerRoutes.route("/post").get(function (req, res) {
    let db_connect = dbo.getDb("Milestones");
    db_connect
        .collection("Post")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new record.
providerRoutes.route("/register").post(function (req, response) {
    let db_connect = dbo.getDb("Milestones");
    let myobj = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    db_connect.collection("User").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });
providerRoutes.route("/createPost").post(function(req,res){
    let db_connect = dbo.getDb("Milestones");
    let myObj = {
        rate: req.body.rate,
        //expirence: req.body.expirence,
        service: req.body.service,
        name: req.body.name,
        expOne: req.body.expOne,
        expTwo: req.body.expTwo,
        tnp: req.body.tnp,
    };
    db_connect.collection("Post").insertOne(myObj, function(e,result){
        if(e) throw err;
        res.json(result);
    });
});
//login
providerRoutes.route("/loginInfo/").get(function (request, res) {
    let db_connect = dbo.getDb("Milestones");
   let myObj={email:request.body.email,
       password: request.body.password,
       }

    db_connect.collection("User")
        .findOne( myObj.email, function(req,result){
            if (!myObj.email  || !bcrypt.compareSync(myObj.password, result.password)) {
                // authentication failed
                console.log("failed");
                res.json(result);

                return false;
            } else {
                // authentication successful
                console.log("passed loginInfo");

                res.json(result);

                return true;
            }
            if (err) throw err;
            res.json(result);
        });
});

module.exports = providerRoutes;