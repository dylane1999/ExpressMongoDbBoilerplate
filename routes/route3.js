const { User } = require("../models");

module.exports = (app) => {
  app.post("/route3/", async (req, res) => {
    try {
      const { userName } = req.body;
      const savedUser = await saveUser(userName);
      res.status(200).send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  });
};

const saveUser = async (userName) => {
  try {
    const newUser = new User({ name: userName });
    const savedUser = await newUser.save();
    console.log(savedUser, "user has been saved in Db ");
    return savedUser;
  } catch (error) {
    console.log(error);
    return (error);
  }
};
