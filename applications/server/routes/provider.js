const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const providerRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
providerRoutes.route("/provider").get(function (req, res) {
    let db_connect = dbo.getDb("Milestones");
    db_connect
        .collection("ServiceProviders")
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

module.exports = providerRoutes;