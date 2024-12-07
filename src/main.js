const express = require("express");
const cors = require("cors");
const config = require("./config/index");
const { repository } = require("./lib/repository");
const { configSchema } = require("./config/schema/config.schema");
const { validateSchema } = require("./lib/validateSchema");
const { router } = require("./modules/module.routes");
const { CustomError } = require("./lib/customError");
const { ResData } = require("./lib/resData");

validateSchema(configSchema, config);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use((req, res, next) => {
  try {
    throw new CustomError(404, "This API does not exist");
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  const message = err.message || "Interval server error";
  const statusCode = err.statusCode || 500;
  const resData = new ResData(statusCode, message);

  res.status(resData.meta.statusCode).json(resData);
});

app.listen(config.PORT, () => {
  console.log("http://localhost:" + config.PORT);
});
