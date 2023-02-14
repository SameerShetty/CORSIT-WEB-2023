const Member = require("../models/memberModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const login = async (req, res) => {
  const { email, password } = req.body;
  const memberExists = await Member.findOne({ email });
  if (!memberExists)
    return res.status(404).json({ message: "Member not found !!!" });
  if (memberExists && (await bcrypt.compare(password, memberExists.password))) {
    let usertoken = genToken(memberExists._id);
    const userDetails = _.omit(memberExists.toObject(), "password");
    res.status(200).json({
      message: "Logged-in successfully !!!",
      user: userDetails,
      token: usertoken,
    });
  } else res.status(401).json({ message: "Invalid password !!!" });
};

const updateMember = async (req, res) => {
  try {
    const memberExists = await Member.updateOne(
      { _id: req.user._id },
      req.body,
      {
        new: true,
      }
    );
    const userDetails = _.omit(memberExists.toObject(), "password");
    res
      .status(200)
      .json({ message: "Profile updated successfully !!!", user: userDetails });
  } catch (error) {
    console.log(error);
    res.status(401).json(error.message);
  }
};
const genToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};
module.exports = {
  login,
  updateMember,
};
