const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
dotenv.config();
const server = express();

// Pug Configuration
server.set("view engine", "pug");
server.set("views", "views");

const adminData = require("./routes/add-users");
const getUserRoute = require("./routes/users");

// bodyParser middleware
server.use(bodyParser.urlencoded({ extended: false }));

server.use(express.static(path.join(__dirname, "public")));

server.use("/users", adminData.routes);
server.use(getUserRoute);

server.use("/", (req, res) => {
  res.status(404).send("<h1>File Not Found</h1>");
});

server.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
