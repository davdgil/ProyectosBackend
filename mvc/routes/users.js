const express = require("express");
const router = express.Router();
const {getUsers, getUser, createUser} = require("../controllers/users")

router.get("/", getUsers)
router.post("/", createUser)
router.get("/:id", getUser)

module.exports = router;
