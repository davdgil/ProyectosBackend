const express = require("express")
const router = express.Router()
const { getItems, getItem, createItem, updateItem } = require("../controllers/tracks")
const { validatorCreateItem, validatorUpdateItem, validatorGetItem } = require("../validators/tracks")
const customHeader = require("../middleware/customHeader")

router.get("/", getItems)
router.post("/", validatorCreateItem, customHeader, createItem)
router.get("/:id",validatorGetItem, getItem)
router.put("/:id", validatorUpdateItem, customHeader, updateItem);


module.exports = router