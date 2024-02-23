const express = require("express")
const router = express.Router()
const { getItems, getItem, createItem } = require("../controllers/tracks")

router.get("/", getItems)
router.post("/", createItem)
router.get("/:id", getItem)

module.exports = router