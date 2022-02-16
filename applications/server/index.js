const express = require("express");
const port = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");
const mongoDB = 'mongodb://127.0.0.1/milestones_db';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error.'));

app.get("/api", (req, res) => {
    res.json({message: "Successfully connected Express with React."});
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}.`);
});