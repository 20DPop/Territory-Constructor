const express = require('express');
const router = express.Router();
const {
  createTerritory,
  getTerritories,
  getTerritoryById,
  updateTerritory,
  deleteTerritory
} = require('../controllers/territoryController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createTerritory)
  .get(protect, getTerritories);

router.route('/:id')
  .get(getTerritoryById)
  .put(protect, updateTerritory)
  .delete(protect, deleteTerritory);

module.exports = router;