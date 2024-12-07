const Joi = require('joi');

const basketSchema = Joi.object({
  total_price: Joi.number().integer().min(0).default(0).required(),
  user_id: Joi.number().integer().positive().required(),
  status: Joi.string().max(36).default('created').required(),
});

module.exports = { basketSchema };
