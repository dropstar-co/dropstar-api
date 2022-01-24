import Router from 'express';
import nftController from '../nft/nftController';
import BidController from './bidController';



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
const router = Router() 
/**
 * @swagger
 * /user/bids/{id}:
 *  get:
 *   summary: Get all user bids
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the nft
 *      example: 2
 *   tags: 
 *        -  User functionality
 *   description: Get all user bids
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
router.get('/user/bids/:id',BidController.getBids)
/**
 * @swagger
 * /bid/nft/{id}:
 *  get:
 *   summary: Get all nft bids
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the nft
 *      example: 1
 *   tags: 
 *        -  Bid functionality
 *   description: Get all nft bids
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
router.get('/bid/nft/:id',BidController.getNftBids)

/**
  * @swagger
  * /bid/complete:
  *  post:
  *   summary: Complete nft bid functionality
  *   tags: 
  *     - Bid functionality
  *   description: Complete nft bid functionality
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Bid'
  *   responses:
  *    201:
  *     description: Bid completed successfully
  *    500:
  *     description: failure in creating complete bid
  */
router.post('/bid/complete',  BidController.completeBid)

export default router;