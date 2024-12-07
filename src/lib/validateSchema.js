const { CustomError } = require("../lib/customError");

function validateSchema(schema, dto) {
  const { error } = schema.validate(dto);

  if (error) {
    throw new CustomError(500, error.details[0].message);
  }
}

module.exports = { validateSchema };
