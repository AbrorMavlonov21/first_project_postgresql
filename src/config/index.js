const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: Number(process.env.PORT),
  JWT_SECRET: process.env.JWT_SECRET,
  DB_URL: process.env.DB_URL
};
