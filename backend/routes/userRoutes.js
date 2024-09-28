
const express = require("express");
const router = express.Router();
const {
  Sign_up,
  Sign_in,
  userProfile,
  Sign_out,
} = require("../controllers/userController");

const { authMiddleware } = require("../middlewares/authMiddleware");

// Separate routes for admin and user
router.route("/signin").post(Sign_in);
router.route("/signup").post(Sign_up);
router.route("/user/profile").get(authMiddleware(['user']), userProfile); // User-specific profile route
router.route("/admin/profile").get(authMiddleware(['admin']), userProfile); // Admin-specific profile route
router.route("/signout").post(Sign_out);

module.exports = router;
