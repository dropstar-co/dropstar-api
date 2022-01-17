import Router from 'express';
import nftController from './nftController';

/**
 * @swagger
 * definitions:
 *  Nft:
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
 * /discover:
 *  get:
 *   summary: This is the discover api
 *   tags: 
 *        -  Discover functionality
 *   description: get all nfts
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
router.get('/discover', nftController.getDiscover)


/**
 * @swagger
 * /nfts/{id}:
 *  get:
 *   summary: Get a single nft
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the nft
 *      example: 2
 *   tags: 
 *        -  Discover functionality
 *   description: get a single nft
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
router.get('/nfts/:id',  nftController.getNft)

export default router;