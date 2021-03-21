const express = require("express");
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const allTheRoutes = require("./routes/joke.routes");

allTheRoutes(app);

app.listen(8000, () => console.log("The server is listening on port 8000"));
