"use strict";
const itemsMock = [
  {
    id: "HAMMER-STAGING",
    name: "HammerStaging"
  },
  {
    id: "NAILS-STAGING",
    name: "NailsStaging"
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return process.env.MOCK_DATA_ITEMS_SEEDER
      ? queryInterface.bulkInsert("Items", itemsMock, {})
      : Promise.resolve();
  },

  down: (queryInterface, Sequelize) => {
    return process.env.MOCK_DATA_ITEMS_SEEDER
      ? queryInterface.bulkDelete(
          "Items",
          {
            id: { [Sequelize.Op.in]: itemsMock.map(item => item.id) }
          },
          {}
        )
      : Promise.resolve();
  }
};
