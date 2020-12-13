const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const bodyParser = require('body-parser');

dotenv.config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser);
app.use(express.urlencoded({ extended: false }));

require("./routes/route1")(app);
require("./routes/route2.js")(app);

var port = process.env.PORT;

app.listen(port, () => {
	console.log('server started on port 5000');
});