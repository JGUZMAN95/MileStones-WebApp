const express = require("express");
const port = process.env.PORT || 3001;
const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
async function main() {
    const uri = "mongodb+srv://MilestonesAdmin:CSC-648Team01@milestones.xaphw.mongodb.net/test";
    const client = new MongoClient(uri);
    try {
        //connecting to database
        await client.connect();
        //listing databases
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);

async function listDatabases(client){
    const dbList = await client.db().admin().listDatabases();

    console.log("Databases:");
    dbList.databases.forEach(db => {
        console.log(db.name);
    })
}
app.get("/api", (req, res) => {
    res.json({message: "Successfully connected Express with React."});
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}.`);
});