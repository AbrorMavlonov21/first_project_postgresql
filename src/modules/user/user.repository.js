const { query } = require("express");
const { repository } = require("../../lib/repository");


class UserRepository {
    #repository;
    constructor(repository) {
        this.#repository = repository;
    }

    async getAll(){
        const query = "SELECT * FROM users ";

        return this.#repository.multiple(query);
    }

    async create(dto){
        const query = "INSERT INTO users(login, password, fullname, is_active) VALUES($1,$2,$3,$4) RETURNING *";

        return this.#repository.single(query, dto.login, dto.password, dto.fullname, dto.is_activey);
    }

    async update(id, dto){
        const query = "UPDATE users SET login=$1, password=$2, fullname=$3, is_active=$4 where id=$5 RETURNING *";

        return this.#repository.single(query, dto.login, dto.password, dto.fullname, dto.is_active, id);
    }

    async getById(id) {
        const query = `SELECT * FROM users WHERE id = $1`;

        return this.#repository.single(query, id);
    }

    async delete(id){
        const query = "DELETE FROM users where id = $1 RETURNING *";

        return this.#repository.single(query, id);
    }

    async getByLogin(login){
        const query = " SELECT * FROM users where login = $1";

        return this.#repository.single(query, login);
    }
}

const userRepository = new UserRepository(repository);

module.exports = { userRepository };