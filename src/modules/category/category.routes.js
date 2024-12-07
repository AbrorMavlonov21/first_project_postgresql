const { Router } = require("express");
const { categoryController } = require("./category.controller");
const router = Router();

router.get("/", categoryController.getAll.bind(categoryController));
router.post("/create", categoryController.create.bind(categoryController));
router.put('/update/:id', categoryController.update.bind(categoryController));
router.delete('/delete/:id', categoryController.delete.bind(categoryController));

module.exports = { router };
