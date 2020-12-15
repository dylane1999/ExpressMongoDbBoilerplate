const mongoose = require("mongoose");

const exampleUserModel = mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("User", exampleUserModel);
