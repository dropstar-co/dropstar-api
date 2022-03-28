import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import SendGridHelper from './../../helpers/sendGridHandler';
import errorHandler from './../../helpers/errorHandler';
import models from './../../database/models';
import responseHandler from '../../helpers/responseHandler';

class AuthController {
  static async createUser(req, res) {
    try {
      const userExists = await models.User.findOne({
        where: { Email: req.body.Email },
      });

      const token = jwt.sign({ email: req.body.Email }, process.env.SECRET_KEY, {
        expiresIn: '7d',
      });
      console.log(token);

      // const token = jwt.sign({email:req.body.Email}, process.env.SECRET_KEY,{expiresIn:'7d'})

      if (!userExists) {
        const user = await models.User.create({
          Email: req.body.Email,
          VenlyUID: req.body.VenlyUID,
          walletAddress: req.body.walletAddress,
        });

        await SendGridHelper.sendConfirmationMail(req.body.Email);
        const data = {
          user,
          token,
        };
        return res.status(201).json({
          success: true,
          message: 'User registered successfully.',
          user: user,
        });
      }
      const data = {
        userExists,
        token,
      };
      return responseHandler(res, 'Logged success', 200, userExists);
    } catch (error) {
      errorHandler.handleError(error.message, 500, res);
    }
  }
  static async updateUser(req, res) {
    try {
      const userExists = await models.User.findOne({
        where: { Email: req.body.Email },
      });

      let user;

      if (!userExists)
        user = await models.User.create({
          Email: req.body.Email,
          VenlyUID: req.body.VenlyUID,
          walletAddress: req.body.walletAddress,
        });
      else {
        user = userExists;
      }

      user.walletAddress = req.body.walletAddress;

      await user.save();

      return res.status(200).json({
        success: true,
        message: 'User updated successfully.',
        user: user,
      });
    } catch (error) {
      console.log({ error });
      errorHandler.handleError(error.message, 500, res);
    }
  }
}

export default AuthController;
