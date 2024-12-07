const { repository } = require("../../lib/repository");


class BasketRepository {
    #repository;
    constructor(repository) {
        this.#repository = repository;
    }

    async getAll(){
        const query = "SELECT * FROM baskets ";

        return this.#repository.multiple(query);
    }

    async create(dto){
        const query = "INSERT INTO baskets(total_price, user_id, status) VALUES($1,$2,$3) RETURNING *";

        return this.#repository.single(query, dto.total_price, dto.user_id, dto.status);
    }

    async update(id, dto){
        const query = "UPDATE baskets SET total_price=$1, user_id=$2, status=$3 where id=$4 RETURNING *";

        return this.#repository.single(query, dto.total_price, dto.user_id, dto.status, id);
    }

    async getById(id) {
        const query = `SELECT * FROM baskets WHERE id = $1`;

        return this.#repository.single(query, id);
    }

    async delete(id){
        const query = "DELETE FROM baskets where id = $1 RETURNING *";

        return this.#repository.single(query, id);
    }

}

const basketRepository = new BasketRepository(repository);

module.exports = { basketRepository };