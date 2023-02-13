const jwt = require("jsonwebtoken");
const Member = require("../models/memberModel");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.SECRET);
      req.user = await Member.findById(decode.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Unauthorized !!!" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized !!!" });
  }
};
module.exports = protect;
