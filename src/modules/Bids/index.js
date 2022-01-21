import Router from 'express';
import nftController from '../nft/nftController';
import BidController from './bidController';



/**
 * @swagger
 * definitions:
 *  Bid:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the nft
 *     example: 'Jayaramachandran'
 *    password:
 *     type: string
 *     description: date of joining of the parent
 *     example: '3050manu'
 *    email:
 *     type: string
 *     description: email of the parent
 *     example: 'jayaramachandran@whizpath.com'
 *    childFullName:
 *     type: string
 *     description: gender of the parent
 *     example: 'male'
 *    dateOfBirth:
 *     type: string
 *     description: dateOfBirth of the child
 *     example: '2020-08-30'
 *  ParentLogin: 
 *   type: object
 *   properties:
 *    email: 
 *     type:  string
 *     example: 'jayaramachandran@whizpath.com'
 *    password: 
 *     type:  string
 *     example: '3050manu'
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
 *        -  Bid functionality
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
 * /nfts/bids/{id}:
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
router.get('/nfts/bids/:id',BidController.getNftBids)

router.post('/completeBid',  BidController.completeBid)

export default router;