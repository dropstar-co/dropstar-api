import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import SendGridHelper from './../../helpers/sendGridHandler';
import errorHandler from './../../helpers/errorHandler';
import models from './../../database/models';

class AuthController {
    static async createUser(req, res) {
        try {

            const user = await models.User.create({
                 email: req.body.email,VenlyID: req.body.VenlyID
                });
            
            // SendGridHelper.sendConfirmationMail(token, req.body.email);

            return res.status(201).json({
                success: true,
                message: 'User registered successfully.',
                user: result
            })
            
        } catch (error) {
            errorHandler.handleError(error, 500, res);
        }
    }



}

export default AuthController;