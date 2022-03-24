'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:false
      },
      ImageLink: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:false
      },
      isVisible: {
        type: Sequelize.BOOLEAN
      },
      SocialLink: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:false
      },
      SocialLabel: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Artists');
  }
};