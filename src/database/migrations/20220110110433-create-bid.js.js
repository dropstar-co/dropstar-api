'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bids', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AmountETH: {
        type: Sequelize.DOUBLE,
        allowNull:false,
        unique:false
      },
      DateBid: {
        type: Sequelize.DATE
      },
      isWinner: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      userID:{
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      nftID:{
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        allowNull: false,
        references: {
          model: 'Nfts',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bids');
  }
};