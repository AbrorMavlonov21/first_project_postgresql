class ResData {
  constructor(statusCode, message, data = null, meta = {}) {
    this.data = data;
    this.meta = {
      statusCode,
      message,
      ...meta,
    };
  }
}

module.exports = { ResData };
