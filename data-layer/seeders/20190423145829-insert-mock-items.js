"use strict";
if (process.env.MOCK_DATA_ITEMS_SEEDER) {
  const items = [
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
      return queryInterface.bulkInsert("Items", items, {});
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete(
        "Items",
        {
          id: { [Sequelize.Op.in]: items.map(item => item.id) }
        },
        {}
      );
    }
  };
}
