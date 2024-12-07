const { CustomError } = require("../../lib/customError");
const { ResData } = require("../../lib/resData");
const { basketRepository } = require("./basket.repository");

class BasketService {
  #repository;
  constructor(repo) {
    this.#repository = repo;
  }

  async getAll() {
    const data = await this.#repository.getAll();

    const resData = new ResData(200, "Success", data);

    return resData;
  }

  async create(dto) {
    const data = await this.#repository.create(dto);

    const resData = new ResData(201, "Created", data);

    return resData;
  }

  async getById(id) {
    const data = await this.#repository.getById(id);

    if (!data) {
      throw new CustomError(404, "Basket not found");
    }

    const resData = new ResData(200, "Success", data);

    return resData;
  }

  async update(id, dto){
    const data = await this.#repository.update(id, dto);

    if (!data) {
    throw new CustomError(404, `Basket with ID ${id} not found`);
    }

    const resData = new ResData(200, 'Updated', data);

    return resData;
  }

  async delete(id){
    const data = await this.#repository.delete(id);

    if (!data) {
      throw new CustomError(404, `Basket with ID ${id} not found`);
    }
    const resData = new ResData(200, 'Deleted', data);
    return resData;
  }
}

const basketService = new BasketService(basketRepository);

module.exports = { basketService };
