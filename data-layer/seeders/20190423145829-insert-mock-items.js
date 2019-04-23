"use strict";

const items = process.env.PROD
  ? []
  : [
      {
        id: "zorro",
        name: "Zorro"
      },
      {
        id: "iron",
        name: "Iron man"
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
