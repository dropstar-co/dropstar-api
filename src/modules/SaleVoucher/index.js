import Router from 'express';
import SaleVoucherController from './saleVoucherController';

/**
 * @swagger
 * definitions:
 *  Bid:
 *   type: object
 *   properties:
 *    userID:
 *     type: string
 *     description: id of the user
 *     example: '3'
 *    nftID:
 *     type: string
 *     description: id of the nft being bid on
 *     example: '1'
 *    AmountETH:
 *     type: string
 *     description: amount of eth being bid
 *     example: '0.0045'
 *    isWinner:
 *     type: boolean
 *     description:  whether a user is a winner or not
 *     example: false
 *    DateBid:
 *     type: string
 *     description: date in which bid was made
 *     example: '2022-01-23'
 */
const router = Router();

router.get('/salevoucher/:bidID', SaleVoucherController.getSaleVoucher);

export default router;
