const express = require("express");
const {
  login,
  updateMember,
  getMembers,
} = require("../controllers/memberController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", login);
router.get("/", getMembers);
router.put("/", protect, updateMember);

module.exports = router;
