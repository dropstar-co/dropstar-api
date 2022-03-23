"use strict";
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define(
    "Artist",
    {
      name: DataTypes.STRING,
      ImageLink: DataTypes.STRING,
      isVisible: DataTypes.BOOLEAN,
      SocialLink: DataTypes.STRING,
      SocialLabel: DataTypes.STRING,
      walletAddress: DataTypes.STRING,
    },
    {}
  );
  Artist.associate = function (models) {
    // associations can be defined here
    Artist.hasMany(models.Nft, {
      foreignKey: "artistID",
    });
  };
  return Artist;
};
