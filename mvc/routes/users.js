const express = require("express");
const router = express.Router();
const {getUsers, getUser, createUser} = require("../controllers/users")



/**
 * @openapi
 * /api/auth/users:
 *  get:
 *      tags:
 *      - User
 *      summary: Get users in the System
 *      description: ''
 *      responses:
 *          '200':
 *              description: Returns the users
 *          '500':
 *              description: Server error
 *      security:
 *          - bearerAuth: []
 */
router.get("/", getUsers)
router.post("/", createUser)
router.get("/:id", getUser)

module.exports = router;
