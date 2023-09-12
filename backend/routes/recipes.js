const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

router.post("/create", async (req, res) => {
  try {
    const { email, name, desc, micro, macro, operation,img } = req.body;
    const collref = db.collection("recipes");
    dispImg = img==undefined?"https://firebasestorage.googleapis.com/v0/b/xara-app.appspot.com/o/food-placeholder.jpg?alt=media&token=ba5c0cd0-2a9c-4643-a38e-40eaf1815a0b":img;
    collref
      .add({
        name,
        desc,
        macro,
        micro,
        operation,
        img: dispImg,
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
                recipelist: docSnapshot.data().recipelist.concat(docRef.id),
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

router.post("/getdetails", async (req, res) => {
    try {
      const { id } = req.body;
      const customdoc = await db.collection("recipes").doc(id);
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

router.post("/addtofavourite", async (req, res) => {
  try {
    const { email, recipe } = req.body;
    const userdoc = db.collection("users").doc(email);
    // Retrieve the document's data
    userdoc
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          alreadyExist = false;
          docSnapshot.data().fav.map((favRecipe) => {
            if (favRecipe == recipe) {
              res.status(200).send("Already in favourite");
              alreadyExist = true;
            }
          });
          if (!alreadyExist) {
            userdoc.update({
              fav: docSnapshot.data().fav.concat(recipe),
            });
            res.status(200).send("Added to favourite");
          }
        } else {
          res.json("User Not Found");
        }
      })
      .catch((error) => {
        console.error("Error retrieving document:", error);
      });
  } catch (e) {
    console.log("Error from recipe.js", e);
    res.status(400).send(e);
  }
});

module.exports = router;
