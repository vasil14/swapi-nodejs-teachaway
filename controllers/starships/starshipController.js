const { Starship } = require('../../models');

exports.getAllStarships = async (req, res) => {
  try {
    const starships = await Starship.findAll();

    res.send(starships);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.getStarshipByName = async (req, res) => {
  const { name } = req.params;

  try {
    const foundStarship = await Starship.findOne({ where: { name } });

    if (!foundStarship)
      return res.status(404).send({ message: 'Starship not found!' });

    res.send(foundStarship);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.setStarshipUnits = async (req, res, next) => {
  const { id, count } = req.body;
  try {
    if (count < 0) {
      return res.status(400).send({ message: 'Inserted a pozitive number!' });
    }
    const foundStarship = await Starship.findOne({ where: { id } });

    await foundStarship.update({ count });

    res.send({ message: 'Units updated!' });
  } catch (error) {
    next(error);
  }
};

exports.increaseStarshipUnits = async (req, res, next) => {
  const { id, count } = req.body;
  try {
    if (count < 0) {
      return res.status(400).send({ message: 'Inserted a pozitive number!' });
    }
    const foundStarship = await Starship.findOne({ where: { id } });

    await foundStarship.increment('count', { by: count });

    res.send({ message: 'Units updated!' });
  } catch (error) {
    next(error);
  }
};

exports.decreaseStarshipUnits = async (req, res, next) => {
  const { id, count } = req.body;
  try {
    if (count < 0) {
      return res.status(400).send({ message: 'Inserted a pozitive number!' });
    }
    const foundStarship = await Starship.findOne({ where: { id } });

    if(count > foundStarship.count){
      return res.status(400).send({message: `Input number must not be higher then ${foundStarship.count}`})
    }
    await foundStarship.decrement('count', { by: count });

    res.send({ message: 'Units updated!' });
  } catch (error) {
    next(error);
  }
};
