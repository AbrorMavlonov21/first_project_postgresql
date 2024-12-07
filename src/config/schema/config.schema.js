const Joi = require("joi");

const configSchema = Joi.object({
  PORT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
  DB_URL: Joi.string().required(),
});

module.exports = { configSchema };
