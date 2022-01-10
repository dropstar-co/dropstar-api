import express from 'express';

import AuthController from './authController';

const Router = express.Router();

Router.post(
    '/register',
    AuthController.createUser
);


export default Router;