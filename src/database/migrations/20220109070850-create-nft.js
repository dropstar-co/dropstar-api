'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Nfts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      isVisible:{
        type: Sequelize.BOOLEAN,
        default:false
      },
      EndDate:{
        type: Sequelize.DATE
      },
      SampleVideoLink:{
        type: Sequelize.STRING,
      },
      ImageLink:{
        type: Sequelize.STRING,
      },
      artistID:{
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        allowNull: false,
        references: {
          model: 'Nfts',
          key: 'id',
        }
      }, 
      NftAbout:{
        type: Sequelize.STRING,
      },

      NftDetails:{
        type: Sequelize.STRING,
      },

      NftType:{
        type: Sequelize.INTEGER,
      },

      PolygonAddress:{
        type: Sequelize.STRING,
      },

      MintedDate:{
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('Nfts');
  }
};