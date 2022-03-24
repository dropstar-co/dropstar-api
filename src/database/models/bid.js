'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    AmountETH: DataTypes.DOUBLE,
    DateBid: DataTypes.DATE,
    isWinner: DataTypes.BOOLEAN
  }, {});
  Bid.associate = function(models) {
    // associations can be defined here
    Bid.belongsTo(models.Nft,{
      foreignKey:'nftID'
    })
    Bid.belongsTo(models.User,{
      foreignKey:'userID'
    })
  };
  return Bid;
};