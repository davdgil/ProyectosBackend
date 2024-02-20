const express = require("express");
const router = express.Router();
const { getItems, getItem} = require("../controllers/tracks");

router.get("/", getItems);
router.get("/:id", getItem);



//router.post("/", createItem);


module.exports = router;


