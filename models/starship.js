'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Starship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Starship.init(
    {
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      manufacturer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cost_in_credits: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      length: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      max_atmosphering_speed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      crew: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passengers: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cargo_capacity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consumables: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hyperdrive_rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      MGLT: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      starship_class: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edited: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Starship',
      tableName: 'starships',
    }
  );
  return Starship;
};
