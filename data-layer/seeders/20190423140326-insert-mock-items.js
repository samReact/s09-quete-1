"use strict";

const items = [
  {
    id: "HAMMER-1234",
    name: "Hammer"
  },
  {
    id: "NAILS-5678",
    name: "Nails"
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    process.env.PROD
      ? queryInterface.bulkInsert("Items", {})
      : queryInterface.bulkInsert("Items", items, {});
  },

  down: (queryInterface, Sequelize) => {
    process.env.PROD
      ? queryInterface.bulkDelete(
          "Items",
          {
            id: { [Sequelize.Op.in]: items.map(item => item.id) }
          },
          {}
        )
      : queryInterface.bulkDelete("Items", {});
  }
};
