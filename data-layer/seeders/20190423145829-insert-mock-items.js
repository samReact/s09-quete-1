"use strict";

const items = [
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
    return process.env.PROD
      ? null
      : queryInterface.bulkInsert("Items", items, {});
  },

  down: (queryInterface, Sequelize) => {
    return process.env.PROD
      ? null
      : queryInterface.bulkDelete(
          "Items",
          {
            id: { [Sequelize.Op.in]: items.map(item => item.id) }
          },
          {}
        );
  }
};
