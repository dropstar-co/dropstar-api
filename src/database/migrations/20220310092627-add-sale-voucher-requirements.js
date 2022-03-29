'use strict';

const nft = require('../models/nft');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Nfts', 'tokenId', {
        type: Sequelize.BIGINT,
      }),
      queryInterface.addColumn('Artists', 'walletAddress', {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Nfts', 'tokenId'),
      queryInterface.removeColumn('Artists', 'walletAddress'),
    ]);
  },
};
