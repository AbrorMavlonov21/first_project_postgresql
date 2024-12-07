const { Router } = require('express');
const { basketController } = require('./basket.controller');

const router = Router();

router.get("/", basketController.getAll.bind(basketController));
router.post("/create", basketController.create.bind(basketController));
router.put('/update/:id', basketController.update.bind(basketController));
router.delete('/delete/:id', basketController.delete.bind(basketController));
router.post('/getbyid/:id', basketController.getById.bind(basketController));

module.exports = { router };