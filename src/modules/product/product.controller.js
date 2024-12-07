const { validateSchema } = require('../../lib/validateSchema');
const { productSchema } =require('./product.schema');
const { productService } = require('./product.service');

class ProductController {
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

        validateSchema(productSchema, dto);

        const resData = await this.#service.create(dto);

        res.status(resData.meta.statusCode).json(resData)

        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next){
        try {
        const productID = req.params.id;
        const dto = req.body;

        validateSchema(productSchema, dto);

        const resData =  await this.#service.update(productID, dto);
      
        res.status(resData.meta.statusCode).json(resData);
            
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next){
        try {
            const productID = req.params.id;

            const resData = await this.#service.delete(productID);

            res.status(resData.meta.statusCode).json(resData);


        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next){
        try {

            const productID = req.params.id;

            const resData = await this.#service.getById(productID);

            res.status(resData.meta.statusCode).json(resData);

            
        } catch (error) {
            next(error);
        }
    }
}

const productController = new ProductController(productService);

module.exports = { productController };