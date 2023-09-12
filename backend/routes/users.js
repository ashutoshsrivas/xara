const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

router.post("/create", async (req, res) => {
  try {
    const { name, email } = req.body;
    const customdoc = await db.collection("users").doc(email);
    // Retrieve the document's data
    customdoc
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          res.json("User already exists");
        } else {
          customdoc
            .set(
              {
                name,
                email,
                recipelist: [],
                deviceList: [],
                fav: [],
              },
              { merge: false }
            )
            .then(() => {
              res.json("User created successfully");
            });
        }
      })
      .catch((error) => {
        console.error("Error retrieving document:", error);
      });
  } catch (e) {
    console.log("Error from auth.js", e);
    res.status(400).send(e);
  }
});

router.post("/getdetails", async (req, res) => {
  try {
    const { email } = req.body;
    const customdoc = await db.collection("users").doc(email);
    // Retrieve the document's data
    customdoc
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          res.json(docSnapshot.data());
        } else {
          res.json("User Not Found");
        }
      })
      .catch((error) => {
        console.error("Error retrieving document:", error);
      });
  } catch (e) {
    console.log("Error from auth.js", e);
    res.status(400).send(e);
  }
});

module.exports = router;
