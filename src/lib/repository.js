const { DB_URL } = require("../config/index");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: DB_URL,
});

class Repository { 
  async single(query, ...params) {
    const client = await pool.connect();

    try {
      const { rows } = await client.query(query, params);

      return rows[0];
    } finally {
      client.release();
    }
  }

  async multiple(query, ...params) {
    const client = await pool.connect();

    try {
      const { rows } = await client.query(query, params);

      return rows;
    } finally {
      client.release();
    }
  }
}

const repository = new Repository();

module.exports = { repository };
