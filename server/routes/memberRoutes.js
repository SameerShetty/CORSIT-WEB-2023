const express = require("express");
const { login, updateMember } = require("../controllers/memberController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/login", login);
router.put("/updateProfile", protect, updateMember);

module.exports = router;
