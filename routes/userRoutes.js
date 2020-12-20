const dbService = require("../dbService");

module.exports = (app) => {
  app.post("/user/create-user", async (req, res) => {
    try {
      const db = dbService.getDbServiceInstance();
      const { userName } = req.body;
      //another method: const userName = req.body.userName
      const savedUser = await db.saveUser(userName);
      res.status(200).send(savedUser);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post("/user/get-user-by-name", async (req, res) => {
    try {
      const db = dbService.getDbServiceInstance();
      const userName = req.body.userName;
      const user = await db.getUserByName(userName);
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  app.get("/user/get-all", async (req, res) => {
    try {
      // const searchName = req.body.searchName;
      const db = dbService.getDbServiceInstance();
      const allUsers = await db.getAllUsers();
      res.status(200).send(allUsers);
    } catch (error) {
      res.status(500).send(error);
    }
  });
};
