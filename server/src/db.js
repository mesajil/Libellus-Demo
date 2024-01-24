const { Sequelize } = require("sequelize");

// Database configuration
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const conString = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
const sequelize = new Sequelize(conString, {
  logging: false,
  native: false,
});

// Try to connect and handle errorss
sequelize
  .authenticate()
  .then(() => {
    console.log("Successful connection to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// Define tables and relationships
require("./model/Activity")(sequelize);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
