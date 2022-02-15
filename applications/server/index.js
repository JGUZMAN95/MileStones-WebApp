const express = require("express");
const port = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({message: "Successfully linked Express with React."});
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}.`);
});