const express = require("express");
const dbConnect = require("./Configs/db.config");
const app = express();
app.use(express.json());


app.listen(4040 , () => {
    console.log("Server running on port 4040");
    dbConnect();
})