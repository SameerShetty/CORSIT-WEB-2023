const mongoose = require("mongoose");

const memberSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [1, "name required !!!"],
    },
    email: {
      type: String,
      required: [1, "email required !!!"],
      unique: true,
    },
    password: {
      type: String,
      required: [1, "password required !!!"],
    },
    img: {
      type: String,
      default: "",
    },
    insta: {
      type: String,
      default: "",
    },
    linkedIn: {
      type: String,
      default: "",
    },
    branch: {
      type: String,
    },
    year: {
      type: Number,
    },
    tech: {
      type: String,
    },
    alumni: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Member", memberSchema);
