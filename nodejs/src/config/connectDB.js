const Sequelize = require("sequelize");
require("dotenv").config();

// Option 1: Passing parameters separately
// const sequelize = new Sequelize("db.nem", "root", null, {
//   host: "localhost",
//   dialect: "mysql",
//   logging: false,
// });

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
    query: {
      raw: true,
    },
    timezone: "+07:00",
  }
);

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
