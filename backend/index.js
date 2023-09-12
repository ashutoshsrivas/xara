const express = require("express");
const app = express();
const cors = require("cors");
const usersRoute = require("./routes/users");
const recipeRoute = require("./routes/recipes");
const runRoute = require("./routes/run");
const deviceRoute = require("./routes/device");

// const {tokenSecret,mysqlcred,getEditMultiplier,createCharge} = require("./Globals");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api/user", usersRoute);
app.use("/api/recipe", recipeRoute);
app.use("/api/run", runRoute);
app.use("/api/device", deviceRoute);


// console.log(createCharge({"username":"Ashutosh Srivastava","email":"ashutoshsrivastava9897@gmail.com"}))

app.listen(8080, () => {
  console.log("Server running at port 8080\n");
});
