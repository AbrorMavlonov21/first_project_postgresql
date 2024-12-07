const { repository } = require("../../lib/repository");

class CategoryRepository {
  #repository;
  constructor(repository) {  
    this.#repository = repository;
  }

  async getAll() {
    const query = "SELECT * FROM categories";

    return this.#repository.multiple(query);
  }

  async create(dto) {
    const query = "INSERT INTO categories (name) VALUES ($1) RETURNING *";

    return this.#repository.single(query, dto.name);
  }

  async getById(id) {
    const query = `SELECT * FROM categories WHERE id = $1`;

    return this.#repository.single(query, id);
  }

  async getByName(name) {
    const query = `SELECT * FROM categories WHERE name = $1`;

    return this.#repository.single(query, name);
  }

  async update(id, dto){
    const query = 'UPDATE categories SET name =$1 WHERE id = $2 RETURNING *';

    return this.#repository.single(query, dto.name, id);
  }
  async delete(id){
    const query = 'DELETE FROM categories where id =$1 RETURNING *';

    return this.#repository.single(query, id);
  }
}

const categoryRepository = new CategoryRepository(repository);

module.exports = { categoryRepository };
