import express from 'express';

import AuthController from './authController';
/**
 * @swagger
 * definitions:
 *  User:
 *   type: object
 *   properties:
 *    VenlyUID:
 *     type: string
 *     description: this is the venly id
 *     example: '67489384-894'
 *    Email:
 *     type: string
 *     description: email of the user
 *     example: 'jayaramachandran@whizpath.com'
 */
const Router = express.Router();
 /**
  * @swagger
  * /user/info:
  *  post:
  *   summary: Get user logged 
  *   tags: 
  *     - User functionality
  *   description: Get user logged 
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/User'
  *   responses:
  *    201:
  *     description: user created succesfully
  *    500:
  *     description: failure in creating parent
  */
Router.post(
    '/user/info',
    AuthController.createUser
);


export default Router;