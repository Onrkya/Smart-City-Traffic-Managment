const express = require('express');
const router = express.Router();
const { signUp, login, deleteUser } = require("../Controllers/auth.controller");

router.post('/signup', signUp);
router.post('/login', login);
router.delete("/login/:id", deleteUser);

module.exports = router;
