"use strict";

const items = process.env.PROD
  ? [
      {
        id: "HAMMER-PROkdskD",
        name: "Hammer"
      },
      {
        id: "NAILS-PdsdsROD",
        name: "Nails"
      }
    ]
  : [
      {
        id: "HAMMER-PROD",
        name: "Hammer"
      },
      {
        id: "NAILS-PROD",
        name: "Nails"
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
