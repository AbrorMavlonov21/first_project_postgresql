const { Router } = require('express');
const { userController } = require('./user.controller');
const { user } = require('pg/lib/defaults');

const router = Router();

router.get("/", userController.getAll.bind(userController));
router.post("/create", userController.create.bind(userController));
router.put('/update/:id', userController.update.bind(userController));
router.delete('/delete/:id', userController.delete.bind(userController));
router.post('/getbyid/:id', userController.getById.bind(userController));

module.exports = { router };