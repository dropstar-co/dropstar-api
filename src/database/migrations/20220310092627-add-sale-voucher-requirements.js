'use strict';

const nft = require('../models/nft');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return Promise.all([
      queryInterface.addColumn('Nfts', 'tokenId', {
        type: Sequelize.BIGINT,
      }),
      queryInterface.addColumn('Artists', 'walletAddress', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('Users', 'walletAddress', {
        type: Sequelize.STRING,
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
    return Promise.all([
      queryInterface.removeColumn('Nfts', 'tokenId'),
      queryInterface.removeColumn('Artists', 'walletAddress'),
      queryInterface.removeColumn('Users', 'walletAddress'),
    ]);
  },
};
