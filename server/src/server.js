const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const server = express();
const localOriginUrl = `http://localhost:${process.env.CLIENT_PORT}`;

server.use(
  cors({
    origin: [localOriginUrl],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

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
