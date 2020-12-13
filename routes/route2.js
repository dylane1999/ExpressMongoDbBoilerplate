module.exports = (app) => {
  app.get("/route2/test", async (req, res) => {
    try {
      res.send({ test: "jsonObj" });
    } catch (err) {
      res.send(404);
    }
  });
};
