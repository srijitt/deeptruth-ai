
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user");

module.exports.authMiddleware = (allowedRoles) => async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    } else {
      try {
        const userAvailable = await User.findById(decoded.user._id);
        if (userAvailable && allowedRoles.includes(userAvailable.role)) {
          req.user = userAvailable;
          next();
        } else {
          return res.status(403).json({ message: "Unauthorized or insufficient permissions" });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });
};
