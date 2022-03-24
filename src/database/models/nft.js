"use strict";
module.exports = (sequelize, DataTypes) => {
  const Nft = sequelize.define(
    "Nft",
    {
      name: DataTypes.STRING,
      isVisible: DataTypes.BOOLEAN,
      EndDate: DataTypes.DATE,
      SampleVideoLink: DataTypes.STRING,
      ImageLink: DataTypes.STRING,
      NftAbout: DataTypes.STRING,
      NftDetails: DataTypes.STRING,
      NftType: DataTypes.INTEGER,
      PolygonAddress: DataTypes.STRING,
      MintedDate: DataTypes.STRING,
      minimumBidETH: DataTypes.DOUBLE,
      tokenId: DataTypes.BIGINT,
    },
    {}
  );
  Nft.associate = function (models) {
    // associations can be defined here
    Nft.hasMany(models.Bid, {
      foreignKey: "nftID",
    });
    Nft.hasMany(models.Song, {
      foreignKey: "NFTID",
    });
    Nft.belongsTo(models.Artist, {
      foreignKey: "artistID",
    });
  };
  return Nft;
};
