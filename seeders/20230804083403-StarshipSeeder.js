'use strict';
const axios = require('axios');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const apiUrl = 'https://swapi.dev/api/starships/';
    let url = apiUrl;
    let allData = [];

    while (url) {
      try {
        const response = await axios.get(url);
        const responseData = response?.data?.results;

        responseData?.forEach(({ films, pilots, ...rest }) => {
          allData.push({ ...rest, createdAt: new Date() });
        });
        url = response.data.next;
      } catch (error) {
        console.error('Error:', error.message);
        break;
      }
    }
    // Insert data into the database
    await queryInterface.bulkInsert('starships', allData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('starships', null, {});
  },
};
