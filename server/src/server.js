const express = require("express");
const morgan = require("morgan");

const server = express();

server.name = "libellus-demo-api";
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(morgan("dev"));

server.get("/", (req, res) => {
  // Default message from server
  res.send("Welcome to Libellus server!");
});

// * Use routes
server.use("/", require("./routes"));

server.use((req, res) => {
  // Route not found message from server
  res.status(404).send(`Route not found: ${req.method} ${req.originalUrl}`);
});

server.use((err, req, res, next) => {
  // Handle errors
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
