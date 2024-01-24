require("dotenv").config();
const server = require("./src/server");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;

server.listen(port, async () => {
  await conn.sync({ alter: true });
  console.log(`Server is running on port ${port}`);
});
