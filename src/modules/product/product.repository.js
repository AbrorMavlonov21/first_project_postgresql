const { repository } = require('../../lib/repository');

class ProductRepository {
    #repository;
    constructor(repository) {
        this.#repository = repository;
    }
 
    async getAll() {
    const query = "SELECT * FROM products";

    return this.#repository.multiple(query);
  }

  async create(dto) {
    const query = "INSERT INTO products (name, description, price, count, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";

    return this.#repository.single(query, dto.name, dto.description, dto.price, dto.count, dto.category_id);
  }

  async getById(id) {
    const query = `SELECT * FROM products WHERE id = $1`;

    return this.#repository.single(query, id);
  }


  async update(id, dto){
    const query = 'UPDATE products SET name =$1, description=$2, price=$3, count=$4, category_id=$5  WHERE id = $6 RETURNING *';

    return this.#repository.single(query, dto.name, dto.description, dto.price, dto.count, dto.category_id, id);
  }
  async delete(id){
    const query = 'DELETE FROM products where id =$1 RETURNING *';

    return this.#repository.single(query, id);
  }
}

const productRepository = new ProductRepository(repository);

module.exports = { productRepository };
