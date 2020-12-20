const dbService = require("../dbService");

module.exports = (app) => {
  app.post("/route3/", async (req, res) => {
    try {
      const db = dbService.getDbServiceInstance();
      const { userName } = req.body;
      //another method: const userName = req.body.userName
      const savedUser = await db.saveUser(userName);
      res.status(200).send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  });
};

