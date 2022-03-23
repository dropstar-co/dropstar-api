'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      VenlyUID: DataTypes.STRING,
      Email: DataTypes.STRING,
      walletAddress: DataTypes.STRING,
    },
    {},
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Bid, {
      foreignKey: 'userID',
    });
  };
  return User;
};
