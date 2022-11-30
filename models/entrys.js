const mongoose = require("mongoose");

const entrysModle = mongoose.model("entries", {
  inp: { type: String },
  out: { type: String },
});

module.exports = entrysModle;
                              