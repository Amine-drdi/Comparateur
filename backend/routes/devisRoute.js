const express = require('express');
const router = express.Router();
const devisController = require('../controllers/devisController');

// Routes CRUD
router.post('/', devisController.createDevis);
router.get('/', devisController.getAllDevis);
router.get('/categorie/:cat', devisController.getDevisByCategory);

router.get('/:id', devisController.getDevisById);
router.put('/:id', devisController.updateDevis);
router.delete('/:id', devisController.deleteDevis);

module.exports = router;
