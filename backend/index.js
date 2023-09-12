const express = require('express')
const app = express()
const usersRoute = require('./routes/users');

// const {tokenSecret,mysqlcred,getEditMultiplier,createCharge} = require("./Globals");

app.use(express.json())
app.use('/api/user',usersRoute)
// console.log(createCharge({"username":"Ashutosh Srivastava","email":"ashutoshsrivastava9897@gmail.com"}))

app.listen(8080,()=>{console.log("Server running at port 8080\n");})