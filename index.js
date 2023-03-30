require("./database/db");
require("dotenv").config();
const routes = require("./routes/Todoroute");
const express=require("express");
const app = express();
const cors=require('cors');

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(8000,()=>{
    console.log("Listening on port 8000")
})


