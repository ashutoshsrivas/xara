const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

router.post("/start", async (req, res) => {
  try {
    const { email, deviceID, recipeID } = req.body;
    const collref = db.collection("devices");
    collref
      .doc(deviceID)
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          permissionGranted = false;
          docSnapshot.data().allowedUser.map((user) => {
            if (user == email) {
              permissionGranted = true;
            }
          });
          if (permissionGranted) {
            collref.doc(deviceID).update({
              recipe: docSnapshot.data().recipe.concat(recipeID),
            });
            res.status(200).send(docSnapshot.data().allowedUser);
          } else {
            res.status(400).send("Permission Denied");
          }
        } else {
          res.json("Device Not Found");
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

router.post("/remove", async (req, res) => {
  try {
    const { email, deviceID, recipeID } = req.body;
    const collref = db.collection("devices");
    collref
      .doc(deviceID)
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          permissionGranted = false;
          docSnapshot.data().allowedUser.map((user) => {
            if (user == email) {
              permissionGranted = true;
            }
          });
          if (permissionGranted) {
            const arr = docSnapshot.data().recipe;
            arr.splice(arr.indexOf(recipeID), 1);
            collref.doc(deviceID).update({
              recipe: arr,
            });
            res.status(200).send(docSnapshot.data().allowedUser);
          } else {
            res.status(400).send("Permission Denied");
          }
        } else {
          res.json("Device Not Found");
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

router.post("/completed", async (req, res) => {
  try {
    const { email, deviceID } = req.body;
    const collref = db.collection("devices");
    collref
      .doc(deviceID)
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          permissionGranted = false;
          docSnapshot.data().allowedUser.map((user) => {
            if (user == email) {
              permissionGranted = true;
            }
          });
          if (permissionGranted) {
            const arr = docSnapshot.data().recipe;
            arr.splice(0, 1);
            collref.doc(deviceID).update({
              recipe: arr,
            });
            res.status(200).send(docSnapshot.data().allowedUser);
          } else {
            res.status(400).send("Permission Denied");
          }
        } else {
          res.json("Device Not Found");
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
