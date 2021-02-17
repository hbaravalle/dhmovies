const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/moviesController');

router.get('/search', moviesController.search);

router.get('/create', moviesController.create); // ----> Imprime el formulario
router.post('/create', moviesController.save); // ----> Recibe los datos del formulario y hace algo con ellos

router.get('/detail/:id', moviesController.detail);

router.get('/edit/:id', moviesController.edit);
router.put('/edit/:id', moviesController.update);

router.delete('/delete/:id', moviesController.delete)

module.exports = router;
