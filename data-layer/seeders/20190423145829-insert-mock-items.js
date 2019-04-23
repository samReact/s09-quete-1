"use strict";
if (process.env.MOCK_DATA_ITEMS_SEEDER) {
  const itemsMock = [
    {
      id: "HAMMER-1234",
      name: "HammerProd"
    },
    {
      id: "NAILS-5678",
      name: "NailsProd"
    }
  ];

  module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("Items", itemsMock, {});
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete(
        "Items",
        {
          id: { [Sequelize.Op.in]: itemsMock.map(item => item.id) }
        },
        {}
      );
    }
  };
}
