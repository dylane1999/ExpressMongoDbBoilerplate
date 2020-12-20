const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./routes/route1")(app);
require("./routes/route2.js")(app);
require("./routes/route3.js")(app);
require("./routes/route4.js")(app);

var port = process.env.PORT || 5000;

// Start Express App
try {
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
} catch (error) {
  console.log("Express Error:", error);
}

//connect mongo db
const dbService = require("./dbService");
const db = dbService.getDbServiceInstance;