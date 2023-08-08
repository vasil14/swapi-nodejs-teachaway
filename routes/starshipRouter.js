const { Router } = require('express');
const starships_router = Router();
const {
  getAllStarships,
  getStarshipByName,
  setStarshipUnits,
  increaseStarshipUnits,
  decreaseStarshipUnits,
} = require('../controllers/starships/starshipController');

starships_router.get('/', getAllStarships);
starships_router.get('/:name', getStarshipByName);
starships_router.patch('/set', setStarshipUnits);
starships_router.patch('/increase', increaseStarshipUnits);
starships_router.patch('/decrease', decreaseStarshipUnits);

module.exports = starships_router;
