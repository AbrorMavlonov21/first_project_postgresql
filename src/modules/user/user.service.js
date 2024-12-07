const { CustomError } = require("../../lib/customError");
const { ResData } = require("../../lib/resData");
const { userRepository } = require("./user.repository");

class UserService {
    #repository;
    constructor(repository) {
        this.#repository = repository;
    }
    async getAll(){
        const data = await this.#repository.getAll();

        const resData = new ResData(200, "Success", data);

        return resData;
    }

    async create(dto){
        const data = await this.#repository.create(dto);

        const resData = new ResData(201, "Created Successfully", data);

        return resData;
    }

    async update(id, dto){
        const data = await this.#repository.update(id, dto);

        if (!data) {
        throw new CustomError(404, `User with ID ${id} not found`);
        }

        const resData = new ResData(200, "Updated Successfully", data);

        return resData;
    }

    async delete(id){
        const data = await this.#repository.delete(id);

        if (!data) {
        throw new CustomError(404, `User with ID ${id} not found`);
        }

        const resData = new ResData(200, "Deleted Successfully", data);

        return resData;
    }

    async getById(id){
        const data = await this.#repository.getById(id);
        if (!data) {
            throw new CustomError(404, `User with ID ${id} not found`);
        }
        const resData = new ResData(200, "Success", data);

        return resData;
    }

    async getByLogin(login){
        const data = await this.#repository.getByLogin(login);

        const resData = new ResData(200, "Success", data);

        if (!data) {
            resData.meta.statusCode = 404;
            resData.meta.message = "User not found";
        }
        return resData;
    }
}

const userService = new UserService(userRepository);

module.exports = { userService };

