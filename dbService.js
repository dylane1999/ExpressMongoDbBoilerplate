// Connect Mongo DB
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { User } = require("./models");

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

  async saveUser(userName) {
    try {
      const newUser = new User({ name: userName });
      const savedUser = await newUser.save();
      console.log(savedUser, "user has been saved in Db ");
      return savedUser;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllUsers() {
    try {
      // find all users
      const allUsers = await User.find({});
      return allUsers;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getUserByName(userName) {
    try {
      const user = await User.find({ name: userName });
      return user;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

module.exports = DbService;
