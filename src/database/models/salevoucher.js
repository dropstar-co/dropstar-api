"use strict";
module.exports = (sequelize, DataTypes) => {
  const SaleVoucher = sequelize.define(
    "SaleVoucher",
    {
      paymentRecipientAddress: DataTypes.STRING,
      startDate: DataTypes.DATE,
      deadline: DataTypes.DATE,
      r: DataTypes.ARRAY(DataTypes.STRING),
      s: DataTypes.ARRAY(DataTypes.STRING),
      v: DataTypes.ARRAY(DataTypes.STRING),
    },
    {}
  );
  SaleVoucher.associate = function (models) {
    SaleVoucher.belongsTo(models.Bid);
  };
  return SaleVoucher;
};
