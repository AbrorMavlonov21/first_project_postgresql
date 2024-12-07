const { validateSchema } = require("../../lib/validateSchema");
const { basketSchema } = require("./basket.schema");
const { basketService } = require("./basket.service");

class BasketController {
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

        validateSchema(basketSchema, dto);

        const resData = await this.#service.create(dto);

        res.status(resData.meta.statusCode).json(resData)

        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next){
        try {
        const basketID = req.params.id;
        const dto = req.body;

        validateSchema(basketSchema, dto);

        const resData =  await this.#service.update(basketID, dto);
      
        res.status(resData.meta.statusCode).json(resData);
            
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next){
        try {
            const basketID = req.params.id;

            const resData = await this.#service.delete(basketID);

            res.status(resData.meta.statusCode).json(resData);


        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next){
        try {

            const basketID = req.params.id;

            const resData = await this.#service.getById(basketID);

            res.status(resData.meta.statusCode).json(resData);

            
        } catch (error) {
            next(error);
        }
    }
}

const basketController = new BasketController(basketService);

module.exports = { basketController };