"use strict";

const items = process.env.PROD
  ? [
      {
        id: "HAMMER-PROkdskD",
        name: "HammerProd"
      },
      {
        id: "NAILS-PdsdsROD",
        name: "NailsProd"
      }
    ]
  : [
      {
        id: "HAMMER-PROD",
        name: "HammerDev"
      },
      {
        id: "NAILS-PROD",
        name: "NailsDev"
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
