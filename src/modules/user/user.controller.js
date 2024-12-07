const { CustomError } = require("../../lib/customError");
const { validateSchema } = require("../../lib/validateSchema");
const { userSchema } = require("./user.schema");
const { userService } = require("./user.service");

class UserController {
    #service;
    constructor(service) {
        this.#service = service;
    }

    async getAll(req, res, next){
        try {
            const resData = await this.#service.getAll();

            res.status(resData.meta.statusCode).json(resData);
            
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next){
        try {
            const dto = req.body;

            validateSchema(userSchema, dto);

            const { meta } = await this.#service.getByLogin(dto.login);

            if (meta.statusCode !== 404) {
                throw new CustomError(400, "User with this login already exist");
            }

            const resData = await this.#service.create(dto);

            res.status(resData.meta.statusCode).json(resData);
            
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next){
        try {

            const userID = req.params.id;
            const dto = req.body;

            validateSchema(userSchema, dto);

            const { meta } = await this.#service.getByLogin(dto.login);

            if (meta.statusCode !== 404) {
                throw new CustomError(400, "User with this login already exist");
            }

            const resData = await this.#service.update(userID, dto);

            res.status(resData.meta.statusCode).json(resData);
            
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next){
        try {

            const userID = req.params.id;

            const resData = await this.#service.delete(userID);

            res.status(resData.meta.statusCode).json(resData);
            
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next){
        try {

            const userID = req.params.id;

            const resData = await this.#service.getById(userID);

            res.status(resData.meta.statusCode).json(resData);
            
        } catch (error) {
            next(error);
        }
    }
}

const userController = new UserController(userService);

module.exports = { userController };