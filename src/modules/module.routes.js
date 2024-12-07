const { Router } = require("express");
const categoryRouter = require("./category/category.routes");
const productRouter = require('../modules/product/product.routes');
const userRouter = require('../modules/user/user.routes');
const basketRouter = require('../modules/basket/basket.routes');
const router = Router();

router.use("/category", categoryRouter.router);
router.use('/product', productRouter.router);
router.use('/user', userRouter.router);
router.use('/basket', basketRouter.router);

module.exports = { router };
