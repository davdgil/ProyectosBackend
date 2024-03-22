const express = require("express")
const router = express.Router();

const { getCommerces, getCommerce, createCommerce, updateCommerce, deleteCommerce } = require("../controller/commerce")
const { validatorCreateCommerce, validatorGetCommerce } = require("../validators/commerce")
router.post("/", validatorCreateCommerce, createCommerce)
router.get("/", getCommerces)
router.get("/:cif", getCommerce)
router.delete("/:cif",validatorGetCommerce, deleteCommerce);
router.put("/:cif",validatorGetCommerce, validatorCreateCommerce, updateCommerce)


module.exports = router;