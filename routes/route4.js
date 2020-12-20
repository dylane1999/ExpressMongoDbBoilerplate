const dbService = require("../dbService");

module.exports = (app) => {
  app.get("/route4/", async (req, res) => {
    try {
      // const searchName = req.body.searchName;
      const db = dbService.getDbServiceInstance();
      const allUsers = await db.getAllUsers();
      res.status(200).send(allUsers)
    } catch (error) {
      res.status(400).send(error)
    }
  });
};
