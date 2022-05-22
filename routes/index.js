// This is the main routing file - i.e. we go to all further routes from this route
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');


router.get('/', homeController.home);
router.post('/add-task', homeController.addTask);
router.get('/delete-task', homeController.deleteTask);

module.exports = router;