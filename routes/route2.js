module.exports = (app) => {
  app.post("/route2/test", async (req, res) => {
    try {
      const { param1 } = req.body;
      res.send({ testParameter: param1 });
    } catch (err) {
      res.status(500).send(err);
    }
  });
};
