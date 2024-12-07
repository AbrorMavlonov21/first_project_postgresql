const { Router } = require('express');
const { productController } = require('./product.controller');

const router = Router();

router.get("/", productController.getAll.bind(productController));
router.post("/create", productController.create.bind(productController));
router.put('/update/:id', productController.update.bind(productController));
router.delete('/delete/:id', productController.delete.bind(productController));
router.post('/getbyid/:id', productController.getById.bind(productController));
module.exports = { router };