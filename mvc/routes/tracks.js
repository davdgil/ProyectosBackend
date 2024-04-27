const express = require("express")
const router = express.Router()
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const customHeader = require("../middleware/customHeader")
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")




router.get("/", authMiddleware, getItems)
router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem)
router.get("/:id",validatorGetItem, getItem)
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem)


module.exports = router