const Joi = require('joi');

const userSchema = Joi.object({
  login: Joi.string().max(36).required(),
  password: Joi.string().required(),
  fullname: Joi.string().max(128).allow(null).optional(),
  is_active: Joi.boolean().default(true).optional(),   
});

module.exports = { userSchema }; 