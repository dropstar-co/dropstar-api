'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Bids',
      [
        {
          AmountETH: '0.001',
          DateBid: '2022-03-23 10:00:00',
          isWinner: true,
          nftID: '1',
          userID: '13',
          createdAt: '2022-03-23 10:00:00',
          updatedAt: '2022-03-23 10:00:00',
        },
        {
          AmountETH: '0.001',
          DateBid: '2022-03-23 10:00:00',
          isWinner: true,
          nftID: '2',
          userID: '13',
          createdAt: '2022-03-23 10:00:00',
          updatedAt: '2022-03-23 10:00:00',
        },
        {
          AmountETH: '0.001',
          DateBid: '2022-03-23 10:00:00',
          isWinner: false,
          nftID: '2',
          userID: '13',
          createdAt: '2022-03-23 10:00:00',
          updatedAt: '2022-03-23 10:00:00',
        },
        {
          AmountETH: '0.001',
          DateBid: '2022-03-23 10:00:00',
          isWinner: false,
          nftID: '2',
          userID: '13',
          createdAt: '2022-03-23 10:00:00',
          updatedAt: '2022-03-23 10:00:00',
        },
        {
          AmountETH: '0.001',
          DateBid: '2022-03-23 10:00:00',
          isWinner: false,
          nftID: '2',
          userID: '13',
          createdAt: '2022-03-23 10:00:00',
          updatedAt: '2022-03-23 10:00:00',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
