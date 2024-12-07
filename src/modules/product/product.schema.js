const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().max(128).required(),
  description: Joi.string().allow(null, '').optional(),
  price: Joi.number().integer().min(0).required(),
  count: Joi.number().integer().min(0).required(),
  category_id: Joi.number().integer().positive().required(),
});

module.exports = { productSchema }; 