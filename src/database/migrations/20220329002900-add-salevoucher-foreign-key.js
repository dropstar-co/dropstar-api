'use strict';

const nft = require('../models/nft');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //alter table "SaleVouchers" add column "bidID" integer NOT NULL;
    //alter table "SaleVouchers" add constraint fk_salevouchers_bids foreign key ("bidID") references "Bids" (id);
    return Promise.all([
      queryInterface.addColumn('SaleVouchers', 'bidID', {
        type: Sequelize.BIGINT,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');

    */
    return Promise.all([queryInterface.removeColumn('SaleVouchers', 'bidID')]);
  },
};
