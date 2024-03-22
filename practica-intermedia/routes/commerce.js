const express = require("express")
const router = express.Router();

const { getCommerces, getCommerce, createCommerce, updateCommerce, deleteCommerce } = require("../controller/commerce")
const { validatorCreateCommerce } = require("../validators/commerce")
router.post("/", validatorCreateCommerce, createCommerce)
router.get("/", getCommerces)
router.get("/:cif", getCommerce)
router.put("/:cif", updateCommerce)


module.exports = router;