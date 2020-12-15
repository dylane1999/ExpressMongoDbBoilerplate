// Connect Mongo DB
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

let instance = null;

const uri = process.env.MONGO_CONNECTION_URL;

//connect mongo using mongoose conenct
try {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected");
    });
} catch (error) {
  console.log("DB Connect Error:", error);
}

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }
}

module.exports = DbService;