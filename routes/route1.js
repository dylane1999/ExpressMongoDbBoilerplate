module.exports = (app) => {
  app.get("/route1/test", async (req, res) => {
    try {
      res.send({ test: "jsonObj" });
    } catch (err) {
      res.send(404);
    }
  });
};
