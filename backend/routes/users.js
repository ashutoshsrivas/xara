const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

router.post("/create", async (req, res) => {
  try {
    // const snapshot = await db.collection("users").get();
    // snapshot.forEach((doc) => {
    //   console.log(doc.id, "=>", doc.data());
    // });
    const { fname,lname, email } = req.body;
    const user = await db.collection("users").add({
      fname,
      lname,
      email,
      recipelist:[],
    });
    res.json("done");
  } catch (e) {
    console.log("Error from auth.js", e);
    res.status(400).send(e);
  }
});

module.exports = router;
