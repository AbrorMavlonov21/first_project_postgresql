const Joi = require("joi");

const categorySchema = Joi.object({
  name: Joi.string().min(3).max(36).required(),
});

module.exports = { categorySchema };
