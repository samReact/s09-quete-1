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
