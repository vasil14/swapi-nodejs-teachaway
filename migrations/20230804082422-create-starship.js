'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('starships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('starships');
  },
};
