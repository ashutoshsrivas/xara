const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

router.post("/register", async (req, res) => {
    try {
      const { email } = req.body;
      const collref = db.collection("devices");
        
      collref
        .add({
          "owner": email,
          allowedUser: [email],
          recipe: []
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          const userdoc = db.collection("users").doc(email);
          // Retrieve the document's data
          userdoc
            .get()
            .then((docSnapshot) => {
              if (docSnapshot.exists) {
                  userdoc.update({
                      deviceList: docSnapshot.data().deviceList.concat(docRef.id),
                  });
              } else {
                res.json("User Not Found");
              }
            })
            .catch((error) => {
              console.error("Error retrieving document:", error);
            });
          res.status(200).send(`Document written with ID: ${docRef.id}`);
        });
    } catch (e) {
      console.log("Error from recipe.js", e);
      res.status(400).send(e);
    }
  });

module.exports = router;
