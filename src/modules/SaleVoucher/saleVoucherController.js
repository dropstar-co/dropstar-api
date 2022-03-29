import responseHandler from '../../helpers/responseHandler';
import errorHandler from '../../helpers/errorHandler';
import { Bid, User, Nft, SaleVoucher, Artist } from '../../database/models';

import moment from 'moment';

class SaleVoucherController {
  static async getSaleVoucher(req, res) {
    const { bidID } = req.params;
    console.log({ params: req.params });

    try {
      const allSaleVouchers = await SaleVoucher.findAll({
        include: [
          {
            model: Bid,
            include: [
              {
                model: Nft,
                include: {
                  model: Artist,
                },
              },
              {
                model: User,
              },
            ],
          },
        ],
        where: { bidID },
      });

      console.log(JSON.stringify({ allSaleVouchers }, null, 2));

      const saleVouchers = allSaleVouchers.map(saleVoucher => {
        console.log({ saleVoucher });
        return {
          _id: saleVoucher.id,
          _tokenAddress: saleVoucher.Bid.Nft.PolygonAddress,
          _tokenId: saleVoucher.Bid.Nft.tokenId,
          _holderAddress: saleVoucher.Bid.Nft.Artist.walletAddress,
          _price: saleVoucher.Bid.AmountETH,
          _bidWinnerAddress: saleVoucher.Bid.walletAddress,
          _paymentRecipientAddress: saleVoucher.paymentRecipientAddress,
          _startDate: Math.floor(new Date(saleVoucher.startDate).getTime() / 1000),
          _deadline: Math.floor(new Date(saleVoucher.deadline).getTime() / 1000),
          _signatures: [
            {
              r: saleVoucher.r[0],
              s: saleVoucher.s[0],
              v: saleVoucher.v[0],
            },
          ],
        };
      });

      console.log(JSON.stringify({ saleVouchers }, null, 2));

      return responseHandler(res, 'SaleVoucher loaded', 200, saleVouchers);
    } catch (error) {
      errorHandler.handleError(error.message, 500, res);
    }
  }

  static async getNftBids(req, res) {
    try {
      const allBids = await Bid.findAll({
        where: { nftID: req.params.id },
        order: [['updatedAt', 'DESC']],
      });

      return responseHandler(res, 'NFT loaded', 200, allBids);
    } catch (error) {
      errorHandler.handleError(error.message, 500, res);
    }
  }

  static async completeBid(req, res) {
    try {
      const dateBid = moment();
      const newBid = await Bid.create({
        userID: req.body.userID,
        nftID: req.body.nftID,
        AmountETH: req.body.AmountETH,
        isWinner: req.body.isWinner,
        DateBid: dateBid,
      });
      const user = await User.findByPk(req.body.userID);
      // console.log(user.dataValues.)
      const nft = await Nft.findByPk(req.body.nftID);
      await SendGridHelper.sendBidConfirmation(
        user.dataValues.Email,
        nft.dataValues.name,
        req.body.AmountETH,
        dateBid,
        nft.dataValues.EndDate,
      );
      return responseHandler(res, 'Your Bid has been submitted', 200, newBid);
    } catch (error) {
      errorHandler.handleError(error.message, 500, res);
    }
  }
}

export default SaleVoucherController;
